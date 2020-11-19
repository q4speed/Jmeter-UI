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
    },
    module: { // loader
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
      },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]'
          }
        }
      ]
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    },
  }
};
