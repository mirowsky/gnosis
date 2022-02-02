/** @type {import('ts-jest').InitialOptionsTsJest} */
const customJestConfig = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },

  transformIgnorePatterns: ["<rootDir>/node_modules/(?!(swiper)/)"],

  moduleNameMapper: {
    "@workspace/stylesheet": "<rootDir>/theme/stylesheet",
    "@workspace/utility": "<rootDir>/utility/index",
    "@workspace/types": "<rootDir>/types",
    "@workspaces/images": "<rootDir>/public/images",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};

module.exports = customJestConfig;
