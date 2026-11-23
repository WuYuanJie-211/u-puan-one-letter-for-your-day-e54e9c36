// One Letter for Your Day — make.fun bounty
// Entry: exactly one letter, nothing else.
// The letter is "G". Behind it: Grinding —
// a full day (and night) grinding bounty after bounty,
// and the grind finally paid off with a first prize.
// G is the whole day in one letter: vivid, funny, true.
import { mkdirSync, writeFileSync } from "node:fs";

const letter = "G";

// The entry must be exactly one A–Z letter, nothing else —
// fail loudly instead of writing a bad entry.
if (!/^[A-Z]$/.test(letter)) {
  throw new Error(`entry must be exactly one A-Z letter, got: ${JSON.stringify(letter)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
