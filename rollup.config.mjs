// Rollup bundles src/superpro-shutter-card.js (with `import 'lit'`) into a
// single IIFE artefact at dist/superpro-shutter-card.js so HACS users can ship
// the file without a build step on their end. Lit (~15KB) is inlined.
//
// Why IIFE: the card registers itself via customElements.define on load. No
// consumer is ever going to `import` from this file - it's loaded by HA as a
// plain <script type="module"> and the side-effect of registration is the
// whole point.
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/superpro-shutter-card.js',
  output: {
    file: 'dist/superpro-shutter-card.js',
    format: 'iife',
    name: 'SuperproShutterCard',
    // Source maps stay external so the shipped artefact is one file. CI does
    // not commit .map files; debugging in HA still works because the bundle
    // keeps readable identifiers (no minify pass).
    sourcemap: false,
  },
  plugins: [
    nodeResolve({ browser: true, preferBuiltins: false }),
  ],
  // No external imports: everything must end up inside the IIFE so the file
  // works as a drop-in HACS resource without sibling files.
  external: [],
};
