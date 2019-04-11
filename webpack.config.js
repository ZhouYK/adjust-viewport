const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'umd/[name].js',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }],
  }
}
