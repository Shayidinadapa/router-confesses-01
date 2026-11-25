// The Router Confesses — make.fun entry
// Writes one line, at most 200 characters, in which a home Wi-Fi router
// excuses itself for dropping the connection at the climax of a movie,
// to /output/entry.txt. Deterministic: the same line every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "Sorry \u2014 I was so invested in the finale that I forgot to route anything. Even the Wi-Fi needed a minute after that twist.";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");
const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  for (const ch of line) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20 && ch !== "\t") {
      throw new Error("entry must not contain control characters");
    }
  }
}

validate(ENTRY);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
// Round-trip guard: what landed on disk must be byte-for-byte the entry.
const written = readFileSync(OUT_FILE, "utf8");
if (written !== ENTRY) {
  throw new Error("round-trip check failed: file content differs from entry");
}
console.log(`wrote ${ENTRY.length} characters to ${OUT_FILE}`);
console.log(dirname(OUT_FILE));
