/**
 * Created by alexcatalisan on 06.11.2017.
 */

const path = require('path');
const webpack = require('webpack');
const rootConfig = require('./config/webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const configEnv = 'development';// process.env.NODE_ENV;

const entries = [
  path.normalize(`${__dirname}/src/index`)
];

module.exports = {
  entry: entries,
  output: {
    path: path.resolve(__dirname, '/public/js/'),
    filename: 'app.js',
    publicPath: '/js/'
  },
  devServer: {
    contentBase: path.join(__dirname, '/public/'),
    port: 8081,
    open: true
  },
  stats: { children: false },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        include: path.normalize(`${__dirname}/src/modules`)
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=1000000',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin(rootConfig),
    new ExtractTextPlugin({
      filename: `${__dirname}/public/css/styles.css`
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: `${__dirname}/.eslintrc.js`,
          emitError: false,
          quiet: true
        }
      }
    })
  ],
  resolve: {
    alias: {
      config: path.normalize(`${__dirname}/src/config/${configEnv}.js`),
      constants: path.normalize(`${__dirname}/src/constants`),
      util: path.normalize(`${__dirname}/src/lib/util.js`)
    },
    extensions: ['.js', '.jsx']
  }
};
