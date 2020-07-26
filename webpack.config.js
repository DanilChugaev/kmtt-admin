/* global module require __dirname */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const path = require('path');
const rootPath = path.resolve(__dirname, 'src/');

module.exports = {
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            appendTsxSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.vue$/, use: 'vue-loader'},
            { test: /\.scss$/, use: ['vue-style-loader', 'css-loader', 'sass-loader']},
            {
                test: /\.pug$/,
                exclude: /(node_modules)/,
                loader: "pug-plain-loader",
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        open: true,
        hot: true,
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '~': rootPath,
        },
        extensions: ['.ts', '.vue', '.js'],
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
