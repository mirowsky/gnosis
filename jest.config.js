const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

/** @type {import('ts-jest').InitialOptionsTsJest} */
const customJestConfig = {
  transform: {
    "^.*.[t|j](s|sx)$": "@swc/jest",
    // "^.*.(esm).[t|j](s|sx)$": "jest-esm-transformer",
  },
  // transformIgnorePatterns: [
  //   "<rootDir>/node_modules/swiper/.*.(esm).[t|j](s|sx)$",
  // ],
  preset: "ts-jest",
  moduleNameMapper: {
    "@workspace/stylesheet": "<rootDir>/theme/stylesheet",
    "@workspace/utility": "<rootDir>/utility/index",
    "@workspace/types": "<rootDir>/types",
    "@workspaces/images": "<rootDir>/public/images",
    "swiper/*": "<rootDir>/node_modules/swiper/swiper-bundle.min.js",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
