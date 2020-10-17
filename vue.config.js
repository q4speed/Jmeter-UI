const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? "./" : "/",
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
};
