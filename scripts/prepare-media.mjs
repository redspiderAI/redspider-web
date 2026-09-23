import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const source = process.argv[2] || "E:/redspider/pic";
const output = resolve("public/redesign");
await mkdir(output, { recursive: true });
const photos = {
  making: "小孩实践.png",
  together: "小孩实践1.png",
  workshop: "小孩实践2.png",
  discovery: "小孩实践3.png",
  "robot-dog": "小孩玩机械狗.png",
  university: "小孩走进大学.png",
};
const manifest = [];
for (const [name, file] of Object.entries(photos)) {
  const input = resolve(source, file);
  const metadata = await sharp(input).metadata();
  for (const width of [640, 1400]) {
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 84 })
      .toFile(resolve(output, `${name}-${width}.webp`));
  }
  manifest.push({
    name,
    source: file,
    width: metadata.width,
    height: metadata.height,
  });
}
await sharp("data/logo/hzlogoreddown.png")
  .trim()
  .resize({ width: 600 })
  .png()
  .toFile(resolve(output, "logo.png"));
await sharp("data/contact/官方客服.png")
  .png()
  .toFile(resolve(output, "contact-qr.png"));
await writeFile(
  resolve(output, "sources.json"),
  JSON.stringify(
    {
      source: "用户提供的 pic 目录；原项目 data/logo 与 data/contact",
      photos: manifest,
    },
    null,
    2,
  ) + "\n",
);
console.log(
  `Prepared ${manifest.length} authentic photos, brand logo and contact QR.`,
);
