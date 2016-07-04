var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '#eval-source-map',
  resolve: {
    root: [
      path.resolve('src')
    ],
    fallback: [path.join(__dirname, 'node_modules')],
  },
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/index'
    ],
    vendor: [
      'lodash',
      'jquery'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      '_': 'lodash'
    })
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
