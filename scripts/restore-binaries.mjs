import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const manifest = JSON.parse(readFileSync(join(root, "binary-parts/manifest.json"), "utf8"));

for (const item of manifest) {
  const b64 = item.parts.map((part) => readFileSync(join(root, part), "utf8").trim()).join("");
  const out = join(root, item.out);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, Buffer.from(b64, "base64"));
  console.log(item.out);
}
