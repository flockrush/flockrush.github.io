const path = require('path');

module.exports = {
    entry: {
        app: './js/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/js')
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
};
