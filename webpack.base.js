const webpack = require('webpack')

module.exports = {
    stats: 'minimal',

    // Tell webpack to run babel on every file it runs through 
    resolve: {
        // ...rest of the resolve config
        fallback: {
            "fs": false,
            // "path": require.resolve("path-browserify"),
            // "crypto": require.resolve("crypto-browserify"),
            // "stream": require.resolve("stream-browserify"),
            // "buffer": require.resolve("buffer/"),
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    }, plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),

    ]
}