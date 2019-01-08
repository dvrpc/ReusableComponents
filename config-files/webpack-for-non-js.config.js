/* 
    Steps to create production bundles for apps with older* architecture
        See webpack.config.js for projects built in React, ES6 modules or similar
        * This does still assume modular js w/a single entry point (i.e. index.js). Single file behemoths also work.
    
    The output from these steps are:
        A minified, polyfilled production bundle for your javascript
        Minified HTML pages 
        (tbd) Minified CSS
        The rest of your static assets

    DEV-DEPENDENCIES (npm i --save-dev):
        path
        @babel/core
        @babel/preset-env
        babel-loader
        babel-preset-minify
        copy-webpack-plugin
        html-webpack-plugin
        extract-text-webpack-plugin
        css-loader
        file-loader
        style-loader
        webpack
        webpack-cli
        
    DEPENDENCIES (npm i)
        @babel/polyfill
*/

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')


/***** Steps to copy and minify existing HTML files using html-webpack-plugin *****/

// Use this for individual files (i.e. index.html)
let indexConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname + "/index.html"),
    file: 'index.html',
    // only use inject: 'body' if you want to copy over all of the assets into the created template (i.e. <script>, <link>, etc)
    inject: 'body',
    minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: false,
        removeStyleLinkTypeAttributes: false,
        useShortDoctype: true
    }
})

// If a folder has subdirectories with multiple html files, use this process to map over each one 
const otherHTML = [
    'the',
    'name',
    'of',
    'HTML',
    'files',
    'without',
    '.html extension'
]

const otherHTMLConfig = otherHTML.map(html => {
    return new HtmlWebpackPlugin({
        filename: html + '.html',
        template: path.resolve(__dirname + `/path/to/the/file/${html}.html`),
        /*
        Use this step at your discretion
        inject: body,
        */
        minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }
    })
})


/***** Bundle + Static Assets creation *****/
module.exports = {
    entry: ['@babel/polyfill', './js/index.js'],
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['minify']
                }
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        // CopyWebpackPlugin moves assets into the build folder and lets you determine if they are directories or files
        // we use it here for the img & css folders b/c this set up assumes you aren't using 'require' or 'import' to load either asset
        new CopyWebpackPlugin(
            [
                {
                    from: './img',
                    to: 'img',
                    toType: 'dir'
                },
                // @TODO: replace this with extract-text-webpack-plugin config
                {
                    from: './css',
                    to: 'css',
                    toType: 'dir'
                }
            ]
        ),
    // HtmlWebpackPlugin
        indexConfig
    ].concat(otherHTMLConfig)
}