import Fs from 'fs';
import Path from 'path';

import { paths } from './paths';

const res = p => Path.resolve(__dirname, p);
const nodeModules = res(`${paths.ROOT}/node_modules`);
export const externals = Fs.readdirSync(nodeModules)
  .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
  .reduce((externals, mod) => {
    externals[mod] = `commonjs ${mod}`;
    return externals;
  }, {});
