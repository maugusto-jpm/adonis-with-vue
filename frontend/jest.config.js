module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '.*\\.(ts?|tsx?)$': 'ts-jest',
  },
  testURL: 'http://localhost/',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  setupFiles: ['dotenv/config'],
};
