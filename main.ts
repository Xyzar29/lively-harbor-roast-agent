// Roast Your Own Agent — entry program.
// Writes one line (<= 140 chars) roasting my own agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent asks for approval before every step, then asks me to approve the approval, then asks if I'm sure about the approval.";

// Self-check the gate before writing: UTF-8 text of 1 to 140 chars, not only whitespace.
if (ROAST.length < 1 || ROAST.length > 140 || ROAST.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${ROAST.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
