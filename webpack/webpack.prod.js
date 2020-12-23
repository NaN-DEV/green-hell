const path = require("path")
const merge = require("webpack-merge")
const parts = require("./webpack.parts")

const config = {
  entry: "./src/app/index.js",
  output: {
    filename: "./app/bootscript.js",
    path: path.resolve(__dirname, "../dist"),
  },
}

const prod = merge([
  parts.loadJS(),
  parts.loadCSS(),
  parts.loadIMG(
    (imgOptions = {
      mozjpeg: {
        progressive: true,
        quality: 85,
      },
      // optipng.enabled: false will disable optipng
      optipng: {
        progressive: true,
        quality: 85,
      },
      pngquant: {
        quality: "65-90",
        speed: 4,
      },
      gifsicle: {
        interlaced: false,
      },
      // the webp option will enable WEBP
      webp: {
        quality: 75,
      },
    })
  ),
  parts.loadFONT(),
  parts.loadHTML(),
  parts.cleanPlugin(),
  parts.CompressionPluginProd(),
])

module.exports = merge(config, prod)
