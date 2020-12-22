const CleanWebpackPlugin = require("clean-webpack-plugin")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const BrowserSyncPlugin = require("browser-sync-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CompressionPlugin = require("compression-webpack-plugin")

module.exports.loadJS = ({
  test = /\.(js|jsx)$/,
  exclude = /node_modules/,
} = {}) => {
  return {
    module: {
      rules: [
        {
          test,
          exclude,
          use: "babel-loader",
        },
      ],
    },
  }
}

module.exports.loadCSS = ({
  test = /\.s?[ac]ss$/,
  exclude = /node_modules/,
  extractOptions = {
    filename: "bootscript.min.css",
  },
} = {}) => {
  return {
    module: {
      rules: [
        {
          test,
          exclude,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                url: true,
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: (loader) => [new require("autoprefixer")()],
                sourceMap: true,
              },
            },
            {
              loader: "resolve-url-loader",
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [new MiniCssExtractPlugin(extractOptions)],
  }
}

module.exports.loadIMG = ({
  test = /\.(png|jpg|gif)$/,
  exclude = /node_modules/,
  fileOptions = {
    limit: 30000,
    name: "./[path][name].[ext]",
    context: path.resolve(__dirname, "./../src/"),
  },
  imgOptions,
} = {}) => {
  return {
    module: {
      rules: [
        {
          test,
          exclude,
          use: [
            {
              loader: "file-loader",
              options: fileOptions,
            },
            {
              loader: "image-webpack-loader",
              options: imgOptions,
            },
          ],
        },
      ],
    },
  }
}

module.exports.loadFONT = ({
  test = /\.(woff|woff2|svg|eot|ttf)$/,
  exclude = /node_modules/,
  optionsFont = {
    limit: 30000,
    name: "./[path][name].[ext]",
    context: path.resolve(__dirname, "./../src/"),
  },
} = {}) => {
  return {
    module: {
      rules: [
        {
          test,
          exclude,
          use: [
            {
              loader: "file-loader",
              options: optionsFont,
            },
          ],
        },
      ],
    },
  }
}

module.exports.loadHTML = ({
  test = /\.html$/,
  exclude = /node_modules/,
  optionsHTML = {
    minimize: false,
  },
  pluginsHTML = [
    new HtmlWebpackPlugin({
      filename: "index.html",

      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",

      template: "./src/about.html",
    }),
    new HtmlWebpackPlugin({
      filename: "faq.html",

      template: "./src/newsList.html",
    }),
    new HtmlWebpackPlugin({
      filename: "news.html",

      template: "./src/newsPost.html",
    }),

    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
    }),
  ],
} = {}) => {
  return {
    module: {
      rules: [
        {
          test,
          exclude,
          use: [
            {
              loader: "html-loader",
              options: optionsHTML,
            },
          ],
        },
      ],
    },
    plugins: pluginsHTML,
  }
}

module.exports.cleanPlugin = () => {
  return {
    plugins: [new CleanWebpackPlugin()],
  }
}

module.exports.BrowserSync = ({
  host = "localhost",
  port = 3301,
  proxy = "http://localhost:3305",
  options = {
    reload: true,
  },
} = {}) => {
  return {
    plugins: [
      new BrowserSyncPlugin(
        {
          host,
          port,
          proxy,
        },
        options
      ),
    ],
  }
}

module.exports.CompressionPluginProd = () => {
  return {
    plugins: [
      new CompressionPlugin({
        algorithm: "gzip",
      }),
    ],
  }
}
