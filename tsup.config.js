import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { index: 'src/index.jsx' },
  format: ['cjs', 'esm'],
  outDir: 'dist',
  sourcemap: true,
  clean: true,
  outExtension({ format }) {
    return { js: format === 'cjs' ? '.js' : '.modern.js' }
  }
})
