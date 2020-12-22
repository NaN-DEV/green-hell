// AUTHOR NA3 GROUP

const prod = require('./webpack/webpack.prod.js');
const dev = require('./webpack/webpack.dev.js');

module.exports = (evn) => {
    if (evn.prod) {
        return prod;
    }
    return dev;
}




// AUTHOR NA3 GROUP
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const webpack = require('webpack');
// const path = require('path');
// const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// module.exports = {
//     mode: 'development',
//     entry: './src/js/index.js',
//     output: {
//         filename: './js/bootscript.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     watch: true,
//     devtool: 'source-map',
//     devServer: {
//         port: 3305,
//         contentBase: path.join(__dirname, 'dist'),
//         hot: true,
//         overlay: true,
//     },
//     module: {
//         rules: [{

//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: 'babel-loader',

//             },
//             {
//                 test: /\.s?[ac]ss$/,
//                 exclude: /node_modules/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     {
//                         loader: 'css-loader',
//                         options: {
//                             url: true,
//                             sourceMap: true,
//                         }
//                     }, {
//                         loader: 'postcss-loader',
//                         options: {
//                             plugins: (loader) => [
//                                 new require('autoprefixer')(),
//                             ],
//                             sourceMap: true,
//                         }
//                     },
//                     {
//                         loader: 'sass-loader',
//                         options: {
//                             sourceMap: true
//                         }
//                     }
//                 ],
//             },
//             { // images
//                 test: /\.(png|jpg|gif|svg)$/,
//                 exclude: /node_modules/,
//                 use: [{
//                     loader: 'file-loader',
//                     options: {
//                         limit: 30000,
//                         name: '[path][hash:20].[ext]',
//                         context: path.resolve(__dirname, "src/"),
//                     }
//                 }, {
//                     loader: 'image-webpack-loader',
//                     options: {
//                         mozjpeg: {
//                             progressive: true,
//                             quality: 65
//                         },
//                         // optipng.enabled: false will disable optipng
//                         optipng: {
//                             progressive: true,
//                             quality: 65
//                         },
//                         pngquant: {
//                             quality: '65-90',
//                             speed: 4
//                         },
//                         gifsicle: {
//                             interlaced: false,
//                         },
//                         // the webp option will enable WEBP
//                         webp: {
//                             quality: 75
//                         }
//                     }
//                 }]
//             },
//             { // font
//                 test: /\.(woff|woff2|svg|eot|ttf)$/,
//                 exclude: /node_modules/,
//                 use: [{
//                     loader: 'file-loader',
//                     options: {
//                         limit: 30000,
//                         name: '[path][hash:20].[ext]',
//                         context: path.resolve(__dirname, "src/"),
//                     }
//                 }]
//             },
//             {
//                 test: /\.html$/,
//                 exclude: /node_modules/,
//                 use: [{
//                     loader: 'html-loader',
//                     options: {
//                         minimize: false
//                     }
//                 }]
//             }
//         ]
//     },
//     plugins: [
//         new CleanWebpackPlugin(),
//         new BrowserSyncPlugin({
//             host: 'localhost',
//             port: 3301,
//             proxy: 'http://localhost:3305'
//         }, {
//             options: {
//                 reload: true,
//             }
//         }),
//         new MiniCssExtractPlugin({
//             filename: "./css/bootscript.min.css"
//         }),
//         new HtmlWebpackPlugin({
//             template: './src/index.html',
//             inject: true,
//             chunks: ['index'],
//             filename: 'index.html'
//         })

//     ]
// };