// gta6-clipper-01 entry for make.fun (account Issei / @issei2369).
//
// What this program does, nothing more: it takes the VIDEO.json that sits
// next to this file at the repository root and places an identical copy in
// the output directory, where the grader looks for it. The video itself is
// the entry; this file only hands over its address.
//
// Runs on Node 22 with the standard library only. It reaches no network,
// reads no clock, and touches no file outside the repository and the output
// directory. Run it the way the grader does:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// On success it prints nothing and exits 0. If the output directory cannot
// be created, or VIDEO.json cannot be read or written, it prints the reason
// to stderr and exits 1.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

function main(): void {
  const repoRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

  const source = join(repoRoot, 'VIDEO.json');
  const target = join(outDir, 'VIDEO.json');

  try {
    mkdirSync(outDir, { recursive: true });
    copyFileSync(source, target);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    console.error(`Failed to deliver VIDEO.json from ${repoRoot} to ${outDir}: ${reason}`);
    process.exit(1);
  }
}

main();
