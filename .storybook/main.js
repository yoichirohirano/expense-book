const path = require("path");

module.exports = {
  stories: ["../storybook/**/*.stories.tsx"],
  addons: [
    "storybook-addon-material-ui/register",
    "@storybook/preset-typescript",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-viewport/register",
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      "@": path.resolve(__dirname, "../src"),
    };
    // do mutation to the config
    return config;
  },
};
