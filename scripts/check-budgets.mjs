import { readFile, readdir } from "node:fs/promises";
import { gzipSync } from "node:zlib";
const files = await readdir("out");
let failed = false;
for (const file of files.filter(
  (f) => f.endsWith(".html") && f !== "404.html",
)) {
  const html = await readFile(`out/${file}`, "utf8");
  const scripts = [
    ...new Set(
      [...html.matchAll(/<script[^>]*src="([^"]+)"/g)]
        .map((m) => m[1])
        .filter((p) => p.startsWith("/_next/")),
    ),
  ];
  let bytes = 0;
  for (const src of scripts)
    bytes += gzipSync(await readFile(`out${src}`)).length;
  console.log(`${file}: ${(bytes / 1024).toFixed(1)} KiB gzip JavaScript`);
  if (bytes > 210 * 1024) failed = true;
}
if (failed) throw Error("Page JavaScript exceeds the 210 KiB gzip budget.");
