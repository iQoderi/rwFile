/**
 * Created by qoder on 17-1-5.
 */
'use strict';
const path = require('path')
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    target: 'node',
    context: path.join(__dirname),
    cache: false,
    debug: false,
    devtool: false,
    output: {
        path: './dist',
        filename: 'dist.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.IgnorePlugin(/vertx/),
    ]
}