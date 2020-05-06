module.exports = {
  stories: ['../src/stories/**/*.stories.(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
  ],
};
