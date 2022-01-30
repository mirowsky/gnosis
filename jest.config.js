const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('ts-jest').InitialOptionsTsJest} */
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "@workspace/stylesheet": "<rootDir>/theme/stylesheet",
    "@workspace/utility": "<rootDir>/utility/index",
    "@workspace/types": "<rootDir>/types",
    "@workspaces/images": "<rootDir>/public/images",
  },
};

module.exports = createJestConfig(customJestConfig);
