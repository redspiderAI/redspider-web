import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const source = process.argv[2] || "C:/Users/ll/Pictures/redspider/redspider";
const output = resolve("public/redesign");
await mkdir(output, { recursive: true });
const files = [];
for (const [file, pose] of [
  ["蛛1.png", "maker"],
  ["蛛2.png", "explorer"],
  ["蛛3.png", "tech"],
  ["蛛4.png", "reader"],
]) {
  const name = `mascot-${pose}.webp`;
  const info = await sharp(resolve(source, file))
    .trim()
    .resize({
      width: 640,
      height: 640,
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .webp({ quality: 90, alphaQuality: 100 })
    .toFile(resolve(output, name));
  files.push({
    source: file,
    output: `public/redesign/${name}`,
    bytes: info.size,
    width: 640,
    height: 640,
  });
}
await writeFile(
  resolve(output, "mascot-sources.json"),
  JSON.stringify(
    {
      source: "用户提供的红蛛吉祥物原图",
      processing: "裁去透明边距、等比例缩放、保留透明通道，未重绘形象",
      files,
    },
    null,
    2,
  ) + "\n",
);
console.log("Prepared all four original mascot poses.");
