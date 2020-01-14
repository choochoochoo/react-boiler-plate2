const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        "./src/index.jsx"
    ],
    output: {
        path: path.join(__dirname, 'public/www/'),
        filename: "js/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]"
                            },
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "src/index.html", to: "index.html" }
        ]),
        new webpack.ProvidePlugin({
            Promise: "imports?this=>global!exports?global.Promise!es6-promise",
        })
    ],
    devServer: {
        historyApiFallback: {
            index: '/',
        },
    },
};
