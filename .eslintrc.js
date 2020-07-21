module.exports = {
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        '@vue/typescript'
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        semi: ['error', 'always', { omitLastInOneLineBlock: true }],
        curly: ['error', 'multi-line'],
        'comma-dangle': ['error', 'always-multiline'],
        'no-continue': 'error',
        'no-restricted-syntax': 'error',
        'no-restricted-properties': 'error',
        'guard-for-in': 'error',
        'space-before-function-paren': ['error', 'never'],
        'keyword-spacing': ['error', { after: true }],
        'vue/custom-event-name-casing': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    },
}
