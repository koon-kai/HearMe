module.exports = {
    entry: {
        'bundle': './app/main.js',
        'admin': './app/admin.js'
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
        //  { test: /\.js$/, loaders: ['jsx?harmony'] }
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