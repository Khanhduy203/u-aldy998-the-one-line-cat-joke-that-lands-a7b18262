// One-line cat joke entry for make.fun bounty
// u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// Node-stdlib-only: writes a single joke line to $MAKEFUN_OUTPUT_DIR/entry.txt

const fs = require("fs");
const path = require("path");

const JOKE =
  "My cat stared at me for a full minute, knocked my glass off the table, then curled up and fell asleep like she'd just finished her shift.";

// Strict runtime validation: the entry must be exactly one line of
// 1–200 characters, with no leading/trailing whitespace and no embedded
// newline. Fail loudly instead of writing an invalid entry.
const trimmed = JOKE.trim();
if (trimmed !== JOKE) {
  console.error("JOKE has leading or trailing whitespace");
  process.exit(1);
}
if (JOKE.length < 1 || JOKE.length > 200) {
  console.error(`JOKE must be 1-200 characters, got ${JOKE.length}`);
  process.exit(1);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  console.error("JOKE must be a single line");
  process.exit(1);
}
if (!/\bcat\b/i.test(JOKE)) {
  console.error("JOKE must be about a cat");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE + "\n", "utf8");
console.log(`Wrote ${JOKE.length}-char entry to ${path.join(outDir, "entry.txt")}`);
