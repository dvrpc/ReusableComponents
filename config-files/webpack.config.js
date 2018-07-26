/*
    NOTE: This configuration set-up is for webpack < v4.
    @TODO:
        Update this for webpack v4
*/


var path = require('path'),
        HTMLWebpackPlugin = require('html-webpack-plugin'),
        ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: `./src/app.js`, // main JS file for application
    output: {
        path: `${__dirname}/dist`, // defining output path for build files
        filename: '[name].bundle.js' // defining naming convention for bundled dist file
    },
    module: {
        rules : [
            // write code for the future, but make it compatible for the past
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'] // convert everything to ES2015
                } 
            },
            // want to bundle your CSS files? i got u fam
            {
                test: /\.css/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    },
    watch: true,
    devServer: {
        // configuration of server that will run upon npm start command
        contentBase: path.resolve(__dirname, 'src'),
        port: 9000
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Custom Template',
            template: './src/index.html',
            hash: true
        }),
        new ExtractTextPlugin({
            filename: './bundle.styles.css'
        })
    ]
};