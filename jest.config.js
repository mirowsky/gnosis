const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('ts-jest').InitialOptionsTsJest} */
const customJestConfig = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
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

module.exports = createJestConfig(customJestConfig);
