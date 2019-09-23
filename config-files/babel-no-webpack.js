// CLI command: 
npx babel filename.js --out-file filename-compiled.js

// .babelrc
{   
    "presets": [
        ["minify"]
    ],
    "plugins": [
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-transform-arrow-functions",
        "@babel/plugin-transform-template-literals"
    ]
}

// package.json
"devDependencies": {
    "@babel/cli": "^7.4.4",
    "@babel/core": "^7.4.4",
    "@babel/plugin-transform-arrow-functions": "^7.2.0",
    "@babel/plugin-transform-async-to-generator": "^7.4.4",
    "@babel/plugin-transform-template-literals": "^7.4.4",
    "babel-preset-minify": "^0.5.0"
},