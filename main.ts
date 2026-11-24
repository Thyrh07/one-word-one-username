// One Word, One Username, One Reward — make.fun entry.
// The entry is our own make.fun username, one word and nothing else.
// The program writes it to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry: our make.fun username. The brief sends the entrant's own
// handle as a single word, at most 30 characters — no explanation,
// no links, no pitch. thyrh07 is the handle this account signs in with,
// and criterion 1 of the judge's brief is exactly that: a real make.fun
// username, the entrant's own handle. Any other word would lose to a
// genuine handle, so there is nothing to invent here — the entry is fixed.
const HANDLE = "thyrh07";
const OUT = "/output/entry.txt";

// Gate: mirror the sealed scorer — UTF-8 text of 1 to 30 characters,
// exactly one word, no surrounding whitespace. A make.fun handle is
// lowercase letters and digits, so reject anything outside that shape.
function validate(word: string): void {
  const chars = [...word];
  if (chars.length < 1 || chars.length > 30) {
    throw new Error(`entry must be 1-30 characters, got ${chars.length}`);
  }
  if (word.includes(" ") || word.includes("\n") || word !== word.trim()) {
    throw new Error("entry must be a single word with no surrounding whitespace");
  }
  if (!/^[a-z0-9]+$/.test(word)) {
    throw new Error("entry must be a lowercase alphanumeric handle");
  }
}

validate(HANDLE);
mkdirSync("/output", { recursive: true });
writeFileSync(OUT, HANDLE, "utf8");
