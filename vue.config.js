const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? "./" : "/",
  outputDir: path.resolve(__dirname, './lib'),
  productionSourceMap: true,
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    entry: './src/index.js',
    output: {
      filename: 'jmeter-ui.min.js',
      library: 'JMeterUI',
      libraryTarget: 'umd',
      umdNamedDefine: true
    }
  }
};
