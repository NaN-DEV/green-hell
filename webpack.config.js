const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    root: path.resolve(__dirname, './src/app/index.js'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Green Hell Blog',
    }),
  ],
  output: {
    filename: './app/[name].js',
    path: path.resolve(__dirname, './public'),
  },
};
