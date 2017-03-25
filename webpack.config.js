const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const dist = path.join(__dirname, 'dist');
const isProduction = (process.env.NODE_ENV === 'production');

let config = {

  entry: './src/index.js',
  output: {
    path: dist,
    filename: 'example.js',
    library: '_example_'
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: []
};

if(isProduction) {
  config.plugins.push(new UglifyJSPlugin());
}


module.exports = config;
