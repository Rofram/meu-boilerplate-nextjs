module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        "sourceMaps": true,

        "jsc": {
          "parser": {
            "syntax": "typescript",
            "tsx": true
          },

          "transform": {
            "react": {
              "runtime": "automatic"
            }
          }
        }
      }
    ]
  },
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/**/mock.ts',
    '!src/types/**/*.d.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest']
}
