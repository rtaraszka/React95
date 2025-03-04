const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: 'svg-react-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        exclude: /node_modules/
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  }
};
