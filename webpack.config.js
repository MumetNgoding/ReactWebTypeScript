const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: 'http://localhost:8080/src',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_module/,
                loader: 'ts-loader',
            },
            {
                test: /\.(jpg|jpeg|gif|ear|otf|webp|mp4|wav|webm|ico|svg|woff|woff2|png|ttf)$/,
                    use: [{
                        loader: 'file-loader'
                    }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}