const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    devtool: 'source-map',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    devServer: {
        port: 3000,
        open: true
    },
    module: { 
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.(css|scss|sass)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']

            },
            {
                test: /\.html$/,
                use: ['html-loader'] //read images or sources
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        })
    ]
}