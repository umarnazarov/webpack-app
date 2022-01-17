const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src/pages'),
    mode: 'development',
    devServer: {
        port: 3000
    },
    entry: {
        main: './index.js',
        about: './about.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HTMLWebpackPlugin({ template: './index.html' }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: '/\.(css|less)$/',
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: '/\.(jpg|png|jpeg|svg)$/',
                use: ['file-loader']
            }
        ]
    }
}