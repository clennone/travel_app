const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
//clean webpack files unleast rm -rf dist &&
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']

            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/cliente/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            //simulate remove files
            dry: true,
            //write logs to the console
            verbose: true,
            //remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}