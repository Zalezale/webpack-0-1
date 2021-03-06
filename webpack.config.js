const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: {
        app: ['./src/index.js', 'webpack-hot-middleware/client'],
        print: ['./src/print.js', 'webpack-hot-middleware/client']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '管理输出'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                // use: [
                //     {
                //         loader: 'url-loader',
                //         options: {
                //             limit: 999
                //         }
                //     }
                // ]
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: false,
                            mozjpeg: {
                                enabled: true,
                                quality: 80
                            },
                        }
                    },

                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};