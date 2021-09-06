import babel from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload';
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'Rx',
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    resolve(),
    uglify(),
    livereload({
      wait: 'dist',
    }),
    serve({
      open: true,
      host: 'localhost',
      port: 9527,
      openPage: '/public/index.html',
      wait: 500,
    })
  ]
}