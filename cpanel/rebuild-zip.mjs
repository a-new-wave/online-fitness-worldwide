import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const parts = readdirSync(dir).filter((name) => /^part-\d+\.txt$/.test(name)).sort();
const b64 = parts.map((name) => readFileSync(join(dir, name), "utf8").replace(/\s+/g, "")).join("");
const out = join(dir, "online-fitness-worldwide-cpanel.zip");
writeFileSync(out, Buffer.from(b64, "base64"));
console.log(out);
