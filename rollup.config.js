import babelLoaderExcludeNodeModulesExcept from 'babel-loader-exclude-node-modules-except';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';

const banner = {
  banner() {
    return `/*! ${pkg.name} ${pkg.version} https://github.com/${pkg.homepage} @license ${pkg.license} */`;
  },
};

const plugins = [
  nodeResolve(),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: babelLoaderExcludeNodeModulesExcept([
      'pako',
      '@timeone-group/error-logger-js',
      '@timeone-group/storage-js',
      'query-string',
      // query-string
      'strict-uri-encode',
      'decode-uri-component',
      'split-on-first',
      'filter-obj',
    ]),
  }),
  banner,
];

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'iife',
        file: 'dist/index.js',
      },
      {
        format: 'iife',
        file: 'dist/index.min.js',
        plugins: [terser()],
      },
    ],
    plugins,
  },
  {
    input: 'src/index.js',
    output: {
      format: 'iife',
      file: 'dist/index.js',
    },
    plugins,
  },
];
