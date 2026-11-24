import { mkdirSync, writeFileSync } from "node:fs";

// Winner D12 (24/25 from 18 drafts): the setup stacks three absurdly specific
// artefacts of a pointless meeting (recurring invite, slide deck, pre-read) and
// the punchline lands on the last word — the only thing it lacks is a reason.
// One sentence, clear on first read, fresh detail no generic complaint reaches.
// package.json {"type":"module"} is added so Node runs main.ts without warnings.
const TEXT = "Our 'quick sync' has a recurring invite, a slide deck, and a pre-read; the only thing it lacks is a reason.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");
