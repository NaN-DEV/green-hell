// AUTHOR NaN

const prod = require("./webpack/webpack.prod.js")
const dev = require("./webpack/webpack.dev.js")

module.exports = (evn) => {
  if (evn.prod) {
    return prod
  }
  return dev
}
