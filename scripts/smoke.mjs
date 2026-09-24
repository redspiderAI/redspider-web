import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const url = process.argv[2] || "http://127.0.0.1:4188/";
const screenshots = process.argv.includes("--screenshots");
const base = new URL(url);
const pageBase =
  base.pathname === "/" && process.env.SMOKE_SERVER_ROOT === "1"
    ? new URL("/redspider-site/", base)
    : base;
const browser = await chromium.launch({
  headless: true,
  channel: process.env.SMOKE_CHANNEL || undefined,
});
const context = await browser.newContext({
  permissions: ["clipboard-read", "clipboard-write"],
  reducedMotion: "reduce",
});
const page = await context.newPage();
const errors = [];
const localLinks = new Set();
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});
page.on("response", (response) => {
  if (
    response.status() >= 400 &&
    new URL(response.url()).origin === base.origin
  )
    errors.push(`${response.status()} ${response.url()}`);
});
const widths = [1440, 1024, 768, 390, 320];
try {
  if (screenshots)
    await mkdir("evidence/redesign-20260924", { recursive: true });
  for (const name of ["home", "courses", "study", "about"]) {
    const target =
      name === "home" ? url : new URL(`${name}.html`, pageBase).href;
    const response = await page.goto(target, { waitUntil: "networkidle" });
    assert.equal(response.status(), 200);
    assert.match(await page.title(), /杭州红蛛科技有限公司/);
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(
      await page.locator(".desktop-nav [aria-current=page]").count(),
      1,
    );
    await page.evaluate(async () => {
      const images = Array.from(document.images);
      images.forEach((image) => {
        image.loading = "eager";
      });
      await Promise.all(images.map((image) => image.decode()));
    });
    const brokenAnchors = await page
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links
          .filter(
            (link) =>
              !document.getElementById(link.getAttribute("href").slice(1)),
          )
          .map((link) => link.outerHTML),
      );
    assert.deepEqual(brokenAnchors, [], `${name} broken anchors`);
    const links = await page
      .locator("a")
      .evaluateAll((nodes) => nodes.map((node) => node.href));
    for (const href of links) {
      const parsed = new URL(href);
      if (
        parsed.origin === base.origin &&
        !/\.(png|webp)$/.test(parsed.pathname)
      )
        localLinks.add(href);
    }
    if (name === "home" || name === "courses") {
      assert.equal(await page.locator("a.course-card").count(), 7);
      assert.equal(
        await page.locator(".course-card[href*='#contact']").count(),
        0,
      );
      for (const [filter, count] of [
        ["AI 与编程", 2],
        ["硬件与机器人", 4],
        ["综合创造营", 1],
      ]) {
        await page.getByRole("button", { name: filter, exact: true }).click();
        assert.equal(await page.locator(".course-card").count(), count);
      }
      await page.getByRole("button", { name: /全部课程/ }).click();
    }
    if (name === "home") {
      assert.equal(await page.locator(".journal-links a").count(), 4);
      assert.equal(await page.locator("img[srcset]").count(), 6);
      const experiences = await page
        .locator(".experience-card")
        .evaluateAll((nodes) => nodes.map((node) => node.href));
      assert.deepEqual(experiences, [
        new URL("study.html#family", pageBase).href,
        new URL("study.html#university", pageBase).href,
      ]);
    }
    if (name === "home" || name === "about") {
      await page.getByRole("button", { name: "复制视频号名称" }).click();
      await page.getByRole("status").filter({ hasText: "已复制" }).waitFor();
      assert.equal(
        await page.evaluate(() => navigator.clipboard.readText()),
        "梦不设限AI训练营",
      );
      const popupPromise = page.waitForEvent("popup");
      await page.getByRole("link", { name: "打开客服二维码" }).click();
      const popup = await popupPromise;
      await popup.waitForLoadState();
      assert.match(popup.url(), /contact-qr\.png$/);
      await popup.close();
    }
    if (name === "courses") {
      const item = page.locator("details").last();
      await item.locator("summary").click();
      assert.equal(await item.getAttribute("open"), "");
      assert.match(await item.innerText(), /2026 年 8 月/);
    }
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        true,
        `${name}: overflow at ${width}px`,
      );
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.getByRole("button", { name: "打开导航" }).click();
    assert.equal(
      await page.getByRole("navigation", { name: "手机导航" }).isVisible(),
      true,
    );
    await page.keyboard.press("Escape");
    assert.equal(
      await page.getByRole("navigation", { name: "手机导航" }).count(),
      0,
    );
    if (screenshots) {
      for (const [mode, width, height] of [
        ["desktop", 1440, 1000],
        ["mobile", 390, 844],
      ]) {
        await page.setViewportSize({ width, height });
        await page.evaluate(() => scrollTo(0, 0));
        await sharp(await page.screenshot({ fullPage: true }))
          .webp({ quality: 85 })
          .toFile(`evidence/redesign-20260924/${name}-${mode}.webp`);
        if (name === "home")
          await sharp(await page.screenshot())
            .webp({ quality: 90 })
            .toFile(`evidence/redesign-20260924/home-${mode}-first.webp`);
      }
    }
    // A fresh document load must work without a SPA fallback.
    await page.reload({ waitUntil: "networkidle" });
    assert.equal(await page.locator("h1").count(), 1);
  }
  for (const href of localLinks) {
    const response = await page.goto(href, { waitUntil: "domcontentloaded" });
    if (response) assert.equal(response.status(), 200, href);
    const hash = new URL(href).hash.slice(1);
    if (hash)
      assert.equal(
        await page.evaluate((id) => !!document.getElementById(id), hash),
        true,
        href,
      );
  }
  for (const id of ["family", "university"]) {
    await page.goto(url);
    await page.locator(`.experience-card[href$="#${id}"]`).click();
    await page.waitForURL(new URL(`study.html#${id}`, pageBase).href);
    await page.waitForFunction((id) => {
      const target = document.getElementById(id);
      if (!target) return false;
      const top = target.getBoundingClientRect().top;
      const header = document
        .querySelector("header")
        .getBoundingClientRect().bottom;
      return top >= header && top < header + 40;
    }, id);
  }
  await page.goto(url);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "打开导航" }).click();
  await page
    .getByRole("navigation", { name: "手机导航" })
    .getByRole("link", { name: "AI 创造课程" })
    .click();
  await page.waitForURL(new URL("courses.html", pageBase).href);
  assert.equal(
    await page.getByRole("navigation", { name: "手机导航" }).count(),
    0,
  );
  assert.equal(await page.locator(".course-card").count(), 7);
  assert.deepEqual(errors, []);
  console.log(
    JSON.stringify(
      {
        result: "PASS",
        url,
        pages: 4,
        courses: 7,
        localDestinations: localLinks.size,
        widths,
        screenshots,
        checked: [
          "images",
          "course filters",
          "internal links and fragments",
          "page refresh",
          "FAQ",
          "clipboard",
          "QR link",
          "mobile menu navigation and Escape",
          "overflow",
          "console and network",
        ],
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
await import("./check-course-links.mjs");
