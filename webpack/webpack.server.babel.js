import path from 'path';
import merge from 'webpack-merge';
import baseConfig from './webpack.base.babel';
import webpackNodeExternals from 'webpack-node-externals';

const ROOT_PATH = path.resolve(__dirname, '.');

const config = {
  target:'node',
  entry:'./server/startServer.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_PATH,'build/server/')
  },
  externals:[webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);