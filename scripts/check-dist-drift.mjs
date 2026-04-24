#!/usr/bin/env node
// CI guard: rebuild dist/superpro-shutter-card.js, diff against the version
// committed at HEAD. If they differ, the committed artefact is stale (someone
// edited dist/ by hand or forgot to run `npm run build`). HACS users grab
// dist/ raw, so drift = broken card.
//
// Run after `npm run build` has produced a fresh dist/. Exits 1 on drift.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const DIST_FILE = 'dist/superpro-shutter-card.js';

let head;
try {
  // git show outputs the file content as committed at HEAD. Suppress stderr
  // because in CI the file is always tracked, and locally a fresh checkout
  // always has it too.
  head = execFileSync('git', ['show', `HEAD:${DIST_FILE}`], { encoding: 'utf8' });
} catch (err) {
  console.error(`[dist-drift] cannot read ${DIST_FILE} from HEAD: ${err.message}`);
  process.exit(2);
}

const built = readFileSync(DIST_FILE, 'utf8');

if (head === built) {
  console.log(`[dist-drift] OK - committed ${DIST_FILE} matches build output`);
  process.exit(0);
}

// On mismatch print a short diagnostic so CI logs are useful. We don't print
// the full diff (it would be huge) - just byte counts and first divergent
// line. Developers re-run `npm run build && git add dist && git commit` to
// fix.
const headLines = head.split('\n');
const builtLines = built.split('\n');
let firstDiff = -1;
for (let i = 0; i < Math.min(headLines.length, builtLines.length); i++) {
  if (headLines[i] !== builtLines[i]) {
    firstDiff = i + 1;
    break;
  }
}
console.error('[dist-drift] FAIL - committed dist differs from build output');
console.error(`  committed: ${head.length} bytes, ${headLines.length} lines`);
console.error(`  built:     ${built.length} bytes, ${builtLines.length} lines`);
if (firstDiff > 0) {
  console.error(`  first divergent line: ${firstDiff}`);
}
console.error('  fix: npm run build && git add dist/ && git commit');
process.exit(1);
