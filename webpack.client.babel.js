import path from 'path';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.babel';

const ROOT_PATH = path.resolve(__dirname, '.');

const config = {
  entry:`./client/index.js`,
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_PATH, 'build/client')
  }
};

module.exports = merge(baseConfig, config);