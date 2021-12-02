import babel from '@rollup/plugin-babel';
import {uglify} from 'rollup-plugin-uglify';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'Rx',
    sourcemap: true,
  },
  experimentalCodeSplitting: true,
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    resolve(),
    uglify(),
    livereload({
      wait: 'dist',
    }),
    postcss({
      modules: true,
      extensions: ['.less', '.css'],
      use: [
        [
          'less',
          {
            javascriptEnabled: true,
          },
        ],
      ],
      inject: true,
      extract: false,
    }),
    eslint(),
    typescript(),
    serve({
      open: true,
      host: 'localhost',
      port: 9527,
      openPage: '/public/index.html',
    }),
  ],
};
