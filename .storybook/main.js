const path = require("path/posix");

module.exports = {
  stories: ["../**/*.stories.*"],
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
          "@workspace/stylesheet": path.resolve(
            process.cwd(),
            "theme/stylesheet.ts"
          ),
          "@workspace/utility": path.resolve(process.cwd(), "utility/index.ts"),
          "@emotion/core": path.resolve(
            process.cwd(),
            "node_modules/@emotion/react"
          ),
          "@emotion/styled": path.resolve(
            process.cwd(),
            "node_modules/@emotion/styled"
          ),
          "emotion-theming": path.resolve(
            process.cwd(),
            "node_modules/@emotion/react"
          ),
        },
      },
    };
  },
};
