/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/common/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  moduleNameMapper: {
    '^@fs/(.*)$': '<rootDir>/src/lib/$1',
  },
};
