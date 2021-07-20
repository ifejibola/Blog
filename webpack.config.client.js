const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js');
const CURRENT_WORKING_DIR = process.cwd()

const config = {
    name: "browser",
    mode: "development",
    devtool: 'eval-source-map',
    entry: './client/Main.js',
    devtool: 'cheap-module-source-map',

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public'),
        // publicPath: '/public/'

    },

}
// module.exports = config
module.exports = merge(baseConfig, config)