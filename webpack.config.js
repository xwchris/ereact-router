const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'simple-react-router': './src/index.js',
    'router-core': './src/router-core.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      }
    ]
  }
}
