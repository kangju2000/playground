import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [{ file: pkg.main, format: 'cjs' }],
  plugins: [resolve(), commonjs(), typescript()],
};
