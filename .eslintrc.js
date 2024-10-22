module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:prettier/recommended',
        'prettier',
        'eslint:recommended'
    ],
    plugins: ['@typescript-eslint','simple-import-sort'],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    env: {
        es6: true,
        node: true,
    },
    rules: {
        // 'no-var': 'warn',
        semi: 'error',
        // indent: ['error', 2, { SwitchCase: 1 }],
        'no-multi-spaces': 'error',
        'space-in-parens': 'error',
        'no-multiple-empty-lines': 'error',
        'prefer-const': 'warn',
        'no-console': 'warn',
        'no-unused-vars':'warn',
        'simple-import-sort/imports':'error',
        'simple-import-sort/exports':'error',
    },
};
