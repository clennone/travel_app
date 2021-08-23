const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const WorkboxPlugin = require('workbox-webpack-plugin');
//clean webpack files unleast rm -rf dist &&
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        filename: 'main.[hash].js',
        // path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'Client'
    },
    //optimization work
    optimization: {
        minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})]
    },
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
   },
    module:{
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.(css|scss|sass)$/i,
                use: [ MiniCssExtractPlugin.loader , 'css-loader', 'sass-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader'] //read images or sources
            },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // test: /\.(svg|png|jpg|gif)$/i,
                // use: {
                //     loader: 'file-loader',
                //     // options: {
                //     //     name: '[name].[hash].[ext]',
                //     //     outputPath: 'img'
                //     // }
                // }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({filename: 'styles.css'}),
        new CleanWebpackPlugin({
            //simulate remove files
            dry: true,
            //write logs to the console
            verbose: true,
            //remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        // new WorkboxPlugin.GenerateSW(),
    ]
}