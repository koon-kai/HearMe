var webpack = require('webpack');
var path = require('path');

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
      { test: /\.js$/, exclude: /(node_modules)/, loaders: ['babel-loader'] },
      { test: /\.scss$/, loaders: ["style", "css", "sass"]}
    ],

    // preLoaders: [
    //     {
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         loader: 'jshint-loader'
    //     }
    // ],


  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./public/scss")]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],
}