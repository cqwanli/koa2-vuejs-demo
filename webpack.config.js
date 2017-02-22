/**
 * Created by wanli on 16/8/4.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      path.resolve(__dirname, "./public/javascripts/vue/entry/main.js")]
  },
  output: {
    path: path.resolve(__dirname, "./public/output/"),
    filename: '[name].bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({filename: "[name].css"})
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.css'],
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.less$/,
        use: ExtractTextPlugin.extract({use: 'css-loader?minimize!less-loader', fallback: 'style-loader'})
      },
      {
        test: /\.png$|\.jpg$|\.gif$|\.ico$/,
        use: "file?name=/public/**/images/[name].[ext]?[hash]"
      }
    ]
  },
};