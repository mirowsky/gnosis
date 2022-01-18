const path = require("path/posix");

module.exports = {
  stories: ["../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "theme-stylesheet": path.join(process.cwd(), "theme/stylesheet.ts"),
        },
      },
    };
  },
};
