export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/*.(test|spec).(ts|tsx|js|jsx)'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(firebase/.*|react/.*)/)'
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', { tsconfig: './tsconfig.json' }],
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    '^~/assets(.*)$': '<rootDir>/src/assets$1',
    '^~/components(.*)$': '<rootDir>/src/components$1',
    '^~/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^~/mocks(.*)$': '<rootDir>/src/mocks$1',
    '^~/models(.*)$': '<rootDir>/src/models$1',
    '^~/providers(.*)$': '<rootDir>/src/providers$1',
    '^~/templates(.*)$': '<rootDir>/src/templates$1',
    '^~/utils(.*)$': '<rootDir>/src/utils$1',
    '^~/testUtils(.*)$': '<rootDir>/src/testUtils$1',
    '^~/styles(.*)$': '<rootDir>/src/styles$1'
  }
}
