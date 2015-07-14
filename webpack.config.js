module.exports = {
    entry:[
        './js/main.js'
    ],
    output: {
        path: __dirname + '/public/js/',
        publicPath: '/public/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions:['','.js','.jsx']
    },
    module: {
        loaders:[
//          { test: /\.js$/, loaders: ['jsx?harmony'] }
            { test: /\.js$/, loaders: ['babel-loader'] }
        ],

        // preLoaders: [
        //     {
        //         test: /\.js$/,
        //         exclude: /node_modules/,
        //         loader: 'jshint-loader'
        //     }
        // ],
    }
}