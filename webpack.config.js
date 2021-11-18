const path = require('path');
const BUILD_DIR = path.resolve(__dirname,'./public/build');
const APP_DIR = path.resolve(__dirname,'./client');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: APP_DIR + '/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR
    }, 
    plugins: [ new HtmlWebpackPlugin ({
        template: './public/index.html',
    })], 
    module: {
        rules: [
           {
            test: /\.(js|jsx)$/,
            exclude: /node_mudules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/react']
                }
            }
           },
           { test: /\.(png|jpg|jpeg|gif|svg)$/, 
             use: {
                 options: "url-loader?limit=100000" 
                }
            }
        ]
    },
    devServer: {
        hot: true,
        static: {
            publicPath: '/build',
        },
        port: 8080,
        proxy: {
            '/api': 'localhost: 3000',
        },
    },
};
