import { terser } from 'rollup-plugin-terser'

// Due to bug [Breaks with multiple outputs](https://github.com/TrySound/rollup-plugin-terser/issues/5) I had to create multiple configuration instead of a simpler one.

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'es',
      file: 'lib/img-scalr.es.js'
    },
    plugins: [ terser() ]
  },
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      file: 'lib/img-scalr.cjs.js'
    },
    plugins: [ terser() ]
  }
]
