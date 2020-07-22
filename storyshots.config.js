/* global module */
module.exports = {
    preset: 'jest-puppeteer',
    // eslint-disable-next-line no-useless-escape
    testRegex: './*\\.snapshot\\.js$',
    setupFilesAfterEnv: ['./integration/setupTests.js'],
};
