import { chromium } from "playwright";
import assert from "node:assert/strict";

// Exercise the actual cards and their navigation, without submitting a form.
const base = process.argv[2] || "http://127.0.0.1:4188/";
const expected = [
  ["voice", "https://hzai.tech/AiCampSignUp/"],
  ["companion", "https://hzai.tech/ai_camp_3d_desktop/"],
  ["code", "https://hzai.tech/ai_camp_miaoda/"],
  ["car", "https://hzai.tech/ai_camp_car/"],
  ["dog", "https://hzai.tech/ai_camp_robot_dog/"],
  ["arm", "https://hzai.tech/ai_camp_arm/"],
  ["camp", "https://hzai.tech/ai_camp_uni/"],
];
const browser = await chromium.launch({
  headless: true,
  channel: process.env.SMOKE_CHANNEL || undefined,
});
try {
  const page = await browser.newPage();
  const destinations = new Set(expected.map(([, href]) => href));
  await page.route("https://hzai.tech/**", (route) =>
    destinations.has(route.request().url())
      ? route.fulfill({
          contentType: "text/html",
          body: "<title>Navigation destination</title>",
        })
      : route.continue(),
  );
  for (const [id, destination] of expected) {
    await page.goto(base);
    const card = page.locator(`a.course-card[data-course="${id}"]`);
    assert.equal(await card.count(), 1, `${id} must be a real course link`);
    assert.equal(await card.getAttribute("href"), destination);
    await card.click();
    await page.waitForURL(destination);
    assert.equal(page.url(), destination);
  }
  console.log(
    "PASS: all seven course cards navigate to their exact published course page.",
  );
} finally {
  await browser.close();
}
