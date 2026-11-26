import { mkdirSync, writeFileSync } from "node:fs";

const diagnosis =
  "Diagnosis: your inner critic has admin privileges. I'm revoking access and giving the password to the part of you that naps.";

if (diagnosis.length > 200 || diagnosis.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${diagnosis.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", diagnosis);
