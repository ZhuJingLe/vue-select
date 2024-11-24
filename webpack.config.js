const path = require('path');
const { VueLoaderPlugin, default: loader } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',       // 解析 CSS
          'sass-loader',      // 编译 SCSS 为 CSS
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html', // 模板 HTML 文件
      filename: 'index.html',      // 输出的 HTML 文件名
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true, 
    port: 8080,
    open: true,
    hot: true,
  }
}