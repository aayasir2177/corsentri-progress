import sharp from "sharp";
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
const directory = "public/images";
await mkdir(`${directory}/optimized`, { recursive: true });
const manifest = {};
for (const file of await readdir(directory)) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const input = path.join(directory, file);
  const meta = await sharp(input).metadata();
  const widths = [
    ...new Set(
      [400, 800, 1200, 1800, Math.min(meta.width, 1800)].filter(
        (w) => w <= meta.width,
      ),
    ),
  ].sort((a, b) => a - b);
  const variants = [];
  for (const width of widths) {
    const base = `/images/optimized/${file.replace(/\.[^.]+$/, "")}-${width}`;
    for (const format of ["webp", "avif"])
      await sharp(input)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .toFormat(format, { quality: format === "avif" ? 52 : 78, effort: 2 })
        .toFile(`public${base}.${format}`);
    variants.push({ width, webp: `${base}.webp`, avif: `${base}.avif` });
  }
  manifest[`/images/${file}`] = {
    width: meta.width,
    height: meta.height,
    variants,
  };
}
await writeFile(
  "app/lib/image-manifest.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log(
  `Generated responsive AVIF and WebP for ${Object.keys(manifest).length} images.`,
);
