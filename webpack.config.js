var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#eval-source-map',
  resolve: {
    fallback: [path.join(__dirname, 'node_modules')],
    alias: {
      'src': path.resolve(__dirname, 'src')
    }
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.(woff2?|eot|ttf|svg)(\?.*)?$/,
      loader: 'file',
      query: {
        limit: 10000,
        name: 'font/[name]_[hash:8].[ext]'
      }
    }]
  }
};
