const path = require('path');
const rootPath = path.resolve(__dirname, '../');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            appendTsSuffixTo: [/\.vue$/],
                            appendTsxSuffixTo: [/\.vue$/],
                        },
                    },
                ],
            },
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
        extensions: ['.ts', '.tsx']
    }
};
