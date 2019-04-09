const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const resolve = require('./resolve.config');

const SOURCE_PATH = '../assets';
const OUTPUT_PATH = '../app/assets/javascripts';

module.exports = merge([{
    entry: [
        path.join(__dirname, SOURCE_PATH, 'main.js')
    ],
    output: {
        path: path.join(__dirname, OUTPUT_PATH),
        filename: 'main.js',
        publicPath: './'
    },
    resolve,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
        ]
    }
}]);
