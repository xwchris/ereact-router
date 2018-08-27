const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'simple-react-router': './src/index.js',
    'path-to-regexp': './src/path-to-regexp.js',
    'router-core': './src/router-core.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      }
    ]
  },
  externals: ["react"]
}
