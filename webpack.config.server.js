const path = require('path');
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const nodeExternals = require('webpack-node-externals')

const config = {
    name: 'server',
    mode: "development",

    entry: './server/server.js',
    externalsPresets: { node: true }, // ignore built in modules like paht, fs, etc
    externals: [nodeExternals()], // ignore modules within node_modules
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'build'),
        publicPath: ''
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

// module.exports = config
module.exports = merge(baseConfig, config);