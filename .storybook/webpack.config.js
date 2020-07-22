const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            {
            test: /\.scss$/,
                use: [
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.pug$/,
                exclude: /(node_modules)/,
                loader: "pug-plain-loader",
            },
        ],
    },
    resolve: {
        alias: {
        '~': rootPath,
        },
        extensions: ['.ts', '.vue', '.js']
    }
};
