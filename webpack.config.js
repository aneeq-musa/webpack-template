const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
     rules: [
       {
         test: /\.scss$/,
         use: [{
           loader: "style-loader"
         },
         {
           loader: "css-loader",
           options: { sourceMap: true }
         },
         {
           loader: "sass-loader",
           options: { sourceMap: true }
         }]
       }
     ]
   }
};
