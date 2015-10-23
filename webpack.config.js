var webpack = require('webpack');

module.exports = {

  entry: {
    'bundle': './client/main.js',
    'admin': './client/admin.js'
  },
  output: {
    path: __dirname + '/public/build/',
    publicPath: '/public/',
    // filename: 'bundle.js'
    filename: '[name].js'
  },
  resolve: {
    extensions:['','.js','.jsx']
  },
  module: {
    loaders:[
      { test: /\.js$/, exclude: /(node_modules)/, loaders: ['babel-loader'] }
    ],

    // preLoaders: [
    //     {
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         loader: 'jshint-loader'
    //     }
    // ],

  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],
}