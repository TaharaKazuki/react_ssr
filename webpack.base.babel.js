import path from 'path';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const ROOT_PATH = path.resolve(__dirname,'.');
const NODE_MODULES_PATH = path.resolve(ROOT_PATH,'node_modules');
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH,'build');
const STATIC_PATH = path.resolve(ROOT_PATH, 'static');
const SERVER_PATH = path.resolve(ROOT_PATH, 'server');
const CLIENT_PATH = path.resolve(ROOT_PATH, 'client');
const SHARED_PATH = path.resolve(ROOT_PATH, 'shared');

module.exports = {
  module: {
    rules:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: NODE_MODULES_PATH,
        options: {
          presets:[
            'react',
            'stage-0',
            ['env',{ targets: { browsers: ['last 2 versions'] }}]
          ]
        }
      },
      {
        test:/\.scss?$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: "isomorphic-style-loader" },
            { loader: "css-loader",
              options: {
                minimize: true,
                sourceMap: true,
                modules: true,
                importLoaders: 2,
                localIdentName: '[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: loader => [
                  autoprefixer()
                ]
              }
            },
            {
              loader: 'sass-loader',
              options:{
                outputStyle: 'expanded'
              }
            }
          ]
        })
      }
    ]
  },
  resolve: {
    alias: {
      app: APP_PATH,
      build: BUILD_PATH,
      static: STATIC_PATH,
      server: SERVER_PATH,
      client: CLIENT_PATH,
      shared: SHARED_PATH
    },
    extensions: ['js','scss']
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/style.css',
      allChunks: true
    }),
  ],
};