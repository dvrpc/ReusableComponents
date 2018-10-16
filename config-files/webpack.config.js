/*
    NOTE: This configuration set-up is for webpack < v4. You will have to import each image that you're using within your application if using file-loader
    @TODO:
        Update this for webpack v4
*/


var path = require('path'),
        HTMLWebpackPlugin = require('html-webpack-plugin'),
        ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractPlugin = new ExtractTextPlugin({
    filename: './bundle.styles.css'
})
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: `./app.js`, // main JS file for application
    output: {
        path: path.resolve(__dirname, 'dist'), // defining output path for build files
        filename: 'js/[name].bundle.js' // defining naming convention for bundled dist file
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
                use: extractPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|jpg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "img/[name].[ext]",
                        limit: 1000
                    }
                }]
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
            template: 'index.html',
            hash: true
        }),
        extractPlugin
    ]
};