const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production'
//const extractCSS = new ExtractTextPlugin('styles.min.css');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
         MiniCssExtractPlugin.loader,
         { loader: 'css-loader', options: { url: false, sourceMap: true } },
         { loader: 'sass-loader', options: { sourceMap: true } }
       ],
       }
     ]
   },
  devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/html/index.html'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'about.html',
      template: './src/html/about.html'
    }),
    new MiniCssExtractPlugin({
      filename: './css/styles.min.css'
  })
  ],
  mode : devMode ? 'development' : 'production'
};
