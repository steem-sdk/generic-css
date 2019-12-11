// config at your vue.config.js

var path = require("path")

module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  chainWebpack: config => {
    if (process.env.NODE_ENV !== "production") config.module.rule("eslint").use("eslint-loader").options({fix: true})
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("@components", path.resolve(__dirname, "src/components"))
      .set("@views", path.resolve(__dirname, "src/views"))
      .set("@router", path.resolve(__dirname, "src/router"))
      .set("@constants", path.resolve(__dirname, "src/constants"))
      .set("@assets", path.resolve(__dirname, "src/assets"))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") return {
    }
  },
  css: {
    extract: {
      filename: 'styles/generic.css',
      chunkFilename: 'styles/generic.css',
    },
  },
}