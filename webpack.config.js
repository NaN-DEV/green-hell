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
      title: 'Green Hell Blog ( Index )',
      filename: 'index.html', // output file
      template: path.resolve(__dirname, './src/index.html'), // template file
    }),
    new HtmlWebpackPlugin({
      title: 'Green Hell Blog  ( About )',
      filename: 'about.html', // output file
      template: path.resolve(__dirname, './src/about.html'), // template file
    }),
    new HtmlWebpackPlugin({
      title: 'Green Hell Blog  ( contact )',
      filename: 'contact.html', // output file
      template: path.resolve(__dirname, './src/contact.html'), // template file
    }),
    new HtmlWebpackPlugin({
      title: 'Green Hell Blog  ( newsList )',
      filename: 'newsList.html', // output file
      template: path.resolve(__dirname, './src/newsList.html'), // template file
    }),
    new HtmlWebpackPlugin({
      title: 'Green Hell Blog  ( newsPost )',
      filename: 'newsPost.html', // output file
      template: path.resolve(__dirname, './src/newsPost.html'), // template file
    }),
  ],
  output: {
    filename: './app/[name].js',
    path: path.resolve(__dirname, './public'),
  },
};
