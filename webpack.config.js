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
            { test: /\.js$/, loaders: ['jsx?harmony'] }
        ]
    }
}