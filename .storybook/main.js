const path = require("path/posix");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  reactOptions: {
    fastRefresh: true,
    strictMode: true,
  },
  stories: ["../**/*.stories.*"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  staticDirs: ["../public"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    (config.resolve.alias = {
      "@workspace/images": path.resolve(process.cwd(), "public", "images"),
    }),
      (config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: [...config.resolve.extensions],
        }),
      ]);
    return config;
  },
};
