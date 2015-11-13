var webpack = require('webpack');

module.exports = {

  entry: {
    'main': './client/main.js',
    'admin': './client/admin.js',
    'signin': './client/signin.js'
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ],
}