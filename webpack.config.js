//здесь мы определим процесс сборки проекта(это пока просто пример)
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');//подключаем clean-webpack-plugin

// import { resolve } from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import MiniCssExtractPlugin, { loader } from 'mini-css-extract-plugin';
// import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
// import TerserPlugin from 'terser-webpack-plugin';
// import { CleanWebpackPlugin } from 'clean-webpack-plugin';//подключаем clean-webpack-plugin


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve("", 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new CleanWebpackPlugin(),//подключаем clean-webpack-plugin для удаления папки distпри сборке проекта

        // new HtmlWebpackPlugin({
        //     template: './src/index.html',
        //     filename: 'index.html'
        // }),//подключаем HtmlWebpackPlugin для отображения html-файла
        // new MiniCssExtractPlugin({
        //     filename: 'style.css'
        // }),
        // new CleanWebpackPlugin(),//подключаем clean-webpack-plugin для удаления папки distпри сборке проекта
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },//здесь мы определим правила для работы с файламив проекте.Правила для работы с файлами. 
};//здесь мы определим правила для работы с файламив проекте.Правила для работы с файлами.

