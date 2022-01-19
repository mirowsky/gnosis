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
          // tsconfig.json path alias wont be resolved without this, webpack will try to find it inside the node_modules folder as it is an absolute import
          "theme-stylesheet": path.join(process.cwd(), "theme/stylesheet.ts"),
          "@workspace/utility": path.join(process.cwd(), "utility/index.ts"),
        },
      },
    };
  },
};
