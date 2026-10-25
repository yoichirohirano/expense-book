import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/storybook/**/*.stories.tsx"],
  addons: ["@storybook/addon-links"],
  framework: "@storybook/react-vite",
};

export default config;
