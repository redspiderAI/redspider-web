import { chromium } from "playwright";
import assert from "node:assert/strict";

const url = process.argv[2] || "http://127.0.0.1:4188/";
const browser = await chromium.launch({
  headless: true,
  channel: process.env.SMOKE_CHANNEL || undefined,
});
const context = await browser.newContext({
  permissions: ["clipboard-read", "clipboard-write"],
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
page.on("console", (message) => {
  if (message.type() === "error") errors.push(message.text());
});
page.on("response", (response) => {
  if (
    response.status() >= 400 &&
    response.url().startsWith(new URL(url).origin)
  )
    errors.push(`${response.status()} ${response.url()}`);
});
try {
  await page.goto(url, { waitUntil: "networkidle" });
  assert.match(await page.title(), /杭州红蛛科技有限公司/);
  assert.equal(await page.locator("h1").count(), 1);
  assert.equal(await page.locator(".course-card").count(), 7);
  assert.equal(await page.locator(".journal-links a").count(), 4);
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    images.forEach((image) => {
      image.loading = "eager";
    });
    await Promise.all(images.map((image) => image.decode()));
  });
  assert.equal(await page.locator("img[srcset]").count(), 6);
  assert.equal(
    await page.evaluate(() =>
      Array.from(document.images).every((image) => image.naturalWidth > 0),
    ),
    true,
  );
  assert.equal(
    await page.evaluate(() =>
      Array.from(document.querySelectorAll('a[href^="#"]')).every((link) =>
        document.getElementById(link.getAttribute("href").slice(1)),
      ),
    ),
    true,
  );
  for (const [name, count] of [
    ["初识 AI", 2],
    ["编程创造", 2],
    ["机器人探索", 3],
  ]) {
    await page.getByRole("button", { name, exact: true }).click();
    assert.equal(await page.locator(".course-card").count(), count);
  }
  await page.getByRole("button", { name: /全部课程/ }).click();
  const courseNames = await page
    .locator(".course-card")
    .evaluateAll((cards) =>
      cards.map((card) => card.getAttribute("aria-label")),
    );
  for (const name of courseNames) {
    await page.getByRole("button", { name, exact: true }).click();
    assert.equal(await page.getByRole("dialog").isVisible(), true);
    await page.keyboard.press("Escape");
    assert.equal(await page.getByRole("dialog").isVisible(), false);
  }
  await page
    .getByRole("button", { name: "了解AI 语音玩具", exact: true })
    .click();
  await page.getByRole("link", { name: "咨询这门课程" }).click();
  assert.equal(await page.getByRole("dialog").isVisible(), false);
  assert.equal(new URL(page.url()).hash, "#contact");
  await page.getByRole("button", { name: "复制视频号名称" }).click();
  await page.getByRole("status").filter({ hasText: "已复制" }).waitFor();
  assert.match(await page.getByRole("status").textContent(), /已复制/);
  assert.equal(
    await page.evaluate(() => navigator.clipboard.readText()),
    "梦不设限AI训练营",
  );
  for (const width of [1440, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      `Overflow at ${width}px`,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "打开导航" }).click();
  await page
    .getByRole("navigation", { name: "手机导航" })
    .getByRole("link", { name: "AI 创造课程" })
    .click();
  assert.equal(
    await page.getByRole("navigation", { name: "手机导航" }).count(),
    0,
  );
  assert.equal(new URL(page.url()).hash, "#courses");
  assert.deepEqual(errors, []);
  console.log(
    JSON.stringify(
      {
        url,
        result: "PASS",
        courses: 7,
        photos: 6,
        referenceLinks: 4,
        viewports: [1440, 1024, 768, 390, 320],
        checked: [
          "assets",
          "anchors",
          "filters",
          "all course dialogs",
          "escape",
          "consult link",
          "clipboard",
          "mobile navigation",
          "overflow",
          "console",
        ],
      },
      null,
      2,
    ),
  );
} finally {
  await browser.close();
}
