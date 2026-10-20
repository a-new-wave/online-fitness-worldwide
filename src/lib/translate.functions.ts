import { createServerFn } from "@tanstack/react-start";

const TARGETS = new Set(["en-IN", "en-SG", "en-AE", "en-GB", "en-US", "hi"]);
const SEP = "\n§§§\n";
const cache = new Map<string, string[]>();

type Payload = { texts: string[]; target: string };

export const translateCopy = createServerFn({ method: "POST" })
  .validator((data: Payload) => {
    if (!data || !Array.isArray(data.texts) || data.texts.length === 0 || data.texts.length > 12) {
      throw new Error("Bad translate request.");
    }
    if (!TARGETS.has(data.target)) throw new Error("Bad language.");
    return {
      target: data.target,
      texts: data.texts.map((item) => String(item).slice(0, 1800)),
    };
  })
  .handler(async ({ data }) => {
    const key = `${data.target}\n${data.texts.join(SEP)}`;
    const hit = cache.get(key);
    if (hit) return { texts: hit };
    try {
      const url = new URL("https://translate.googleapis.com/translate_a/single");
      url.searchParams.set("client", "gtx");
      url.searchParams.set("sl", "en");
      url.searchParams.set("tl", data.target);
      url.searchParams.set("dt", "t");
      url.searchParams.set("q", data.texts.join(SEP));
      const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
      if (!response.ok) return { texts: data.texts };
      const payload = (await response.json()) as unknown;
      const chunks = Array.isArray(payload) ? payload[0] : null;
      if (!Array.isArray(chunks)) return { texts: data.texts };
      const joined = chunks
        .map((part) => (Array.isArray(part) && typeof part[0] === "string" ? part[0] : ""))
        .join("");
      const parts = joined.split("§§§").map((part) => part.trim());
      if (parts.length !== data.texts.length) return { texts: data.texts };
      cache.set(key, parts);
      return { texts: parts };
    } catch {
      return { texts: data.texts };
    }
  });
