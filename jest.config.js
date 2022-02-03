const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('ts-jest').InitialOptionsTsJest} */
const customJestConfig = {
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(swiper|ssr-window|dom7|)/)",
  ],

  moduleNameMapper: {
    "@workspace/stylesheet": "<rootDir>/theme/stylesheet",
    "@workspace/utility": "<rootDir>/utility/index",
    "@workspace/types": "<rootDir>/types",
    "@workspaces/images": "<rootDir>/public/images",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
