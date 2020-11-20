const webpack = require('webpack');

module.exports = {
    entry: './openlayers.js',
    module: {
        rules: [
            {test: /\.css$/, use: 'css-loader'}
        ]
    },
    output: {
        path: __dirname,
        filename: 'openlayers-bundle.js'
    }
};