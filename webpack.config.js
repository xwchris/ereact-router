const path = require('path');
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
  mode,
  devtool: mode === 'production' ? 'hidden-source-map' : 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
    filename: `ereact-router.${mode}.js`,
    path: path.join(__dirname, 'dist'),
    library: 'EReactRouter',
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
}
