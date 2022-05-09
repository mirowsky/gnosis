const { vite_tsconfig_path } = require("../scripts/tsconfig_paths");

/** @type {import("@storybook/core-common").StorybookConfig} */
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  /** @type {(config: import("vite").UserConfig) => import("vite").UserConfig}  */
  viteFinal: async (config, { configType }) => {
    const customConfig = config;

    customConfig.resolve.alias = vite_tsconfig_path();

    return customConfig;
  },
};
