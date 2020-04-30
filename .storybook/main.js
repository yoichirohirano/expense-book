module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config) => {
    // do mutation to the config
    return config;
  },
};
