import { defineConfig } from 'tsup'

export default defineConfig({
  entry: { index: 'src/index.js' },
  format: ['cjs', 'esm'],
  outDir: 'dist',
  sourcemap: true,
  clean: true,
  loader: { '.js': 'jsx' },
  outExtension({ format }) {
    return { js: format === 'cjs' ? '.js' : '.modern.js' }
  }
})
