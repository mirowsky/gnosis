const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  stories: ["../**/*.stories.*"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      plugins: [...config.plugins, new TsconfigPathsPlugin()],
    };
  },
};
