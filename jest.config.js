// eslint-disable-next-line no-undef
module.exports = {
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-raw-loader',
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },

    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/$1',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },

    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'vue'],
    testMatch: ['**/*.spec.js', '**/*.spec.ts'],
    testURL: 'http://localhost/',
};
