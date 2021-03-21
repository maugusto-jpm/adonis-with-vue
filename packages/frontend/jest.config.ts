module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js', 'ts', 'json', 'vue',
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(ts?|tsx?)$': 'ts-jest',
  },
  testURL: 'http://localhost/',
  testRegex: './src/.*\\.(test\\.ts)',
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  setupFiles: ['dotenv/config'],
}
