const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: [
        './src/js/index.js',
        './src/css/main.css'
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCssAssetsPlugin({})
        ]
    },
    output: {
        path: path.resolve(__dirname, './docs/'),
        filename: './bundle.js',
        publicPath: 'docs/'
    },
    module: {
        rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/css'),

                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },

                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                ]

            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './style.css'
        }),
        new CopyWebpackPlugin([{
            from: './src/images',
            to: './images'
        }]),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/html/index.html',
            filename: 'index.html'
        }),
    ]
};