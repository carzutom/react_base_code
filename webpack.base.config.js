const path = require('path');
const webpack = require('webpack');

const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcRoot = path.resolve(__dirname, 'src');
const appRoot = path.resolve(srcRoot, 'app');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    main: './src/app/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[hash].js',
    sourceMapFilename: 'js/[chunkhash].map',
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {test: /\.css$/, loader: "style-loader!css-loader"},
      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {test: /\.json$/, loader: "json-loader"},
      {test: /\.(jpe?g|png|gif|svg)$/, loader: 'file-loader'},
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      appRoot,
      'node_modules'
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
    //hot: true,
    compress:true,
    publicPath: '/',
    stats: "minimal"
  },
  stats: "minimal",
  performance: {
    hints: false
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: path.resolve(srcRoot, 'index.html'),
      chunksSortMode: 'dependency'
    }),
    new CopyWebpackPlugin([
      {from: './src/index.html'},
    ]),
    new ExtractTextPlugin(
      'styles.css', {allChunks: true}
    )
  ]
};
