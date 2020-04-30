module.exports = {
  stories: ['../storybook/**/*.stories.tsx'],
  addons: [
    'storybook-addon-material-ui/register',
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config) => {
    // do mutation to the config
    return config;
  },
};
