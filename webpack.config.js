let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        app: path.join(__dirname, './src/index.js'),
        vendor: ['react', 'react-dom']
    },
    output: {
        filename: '[name][chunkhash].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        
                    }
                },
                exclude: [
                    path.join(__dirname, './node_modules')
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '手动搭建项目',
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    devtool: "cheap-source-map",
    optimization: {
        splitChunks: {
          chunks: 'all'
        }
    }
}