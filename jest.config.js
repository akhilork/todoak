module.exports = {
  preset: 'react-native',
  setupFiles: ['./jestSetup.js'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?(@react-native|react-native)|react-navigation|@react-navigation/.*)',
  ],
};
