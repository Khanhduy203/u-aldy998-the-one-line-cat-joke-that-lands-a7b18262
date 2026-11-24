// One-line cat joke entry for make.fun bounty
// u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// Node-stdlib-only: writes a single joke line to $MAKEFUN_OUTPUT_DIR/entry.txt

const fs = require("fs");
const path = require("path");

const JOKE =
  "My cat stared at me for a full minute, knocked my glass off the table, then curled up and fell asleep like she'd just finished her shift.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE + "\n", "utf8");
