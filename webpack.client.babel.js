import path from 'path';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.babel';

const { DEVICE } = process.env;
global.__ENV__ = {device:DEVICE};

const ROOT_PATH = path.resolve(__dirname, '.');

const config = {

  entry:`./client/${DEVICE}/index.js`,

  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_PATH, `build/client/${DEVICE}`)
  }
};

module.exports = merge(baseConfig, config);