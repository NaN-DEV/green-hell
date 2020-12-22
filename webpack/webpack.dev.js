const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');



const config = {
    entry: './src/js/index.js',
    output: {
        filename: './js/bootscript.js',
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: 'source-map',
    watch: true,
    devServer: {
        port: 3305,
        contentBase: path.join(__dirname, '../dist/'),
        hot: true,
        overlay: true,
    },
}

const prod = merge([
    parts.loadJS(),
    parts.loadCSS(),
    parts.loadIMG(),
    parts.loadFONT(),
    parts.loadHTML(),
    parts.BrowserSync(),
    parts.cleanPlugin(),
]);


module.exports = merge(config, prod);