const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'devolopment',
    entry: '.src/client/index.js',
    devtool: 'source-map',
    rules: [
        {
            test: '\/.js/',
            exclude: /node_modules/,
            use: ['babel-loader']
        }
    ],
    plugin: [
        new HTMLWebpackPlugin({
            template: './src/cliente/views/index.html',
            filename: './index.html'
        })
    ]
}