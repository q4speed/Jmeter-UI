const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'demo' ? "./" : "/",
  outputDir: process.env.NODE_ENV === 'demo' ? resolve("./docs") : resolve('./lib'),
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    },
    output: {
      library: 'JMeterUI',
    }
  },
  pages: {
    demo: {
      entry: "./demo/main.js",
      template: "./demo/index.html",
      filename: "index.html"
    }
  }
};
