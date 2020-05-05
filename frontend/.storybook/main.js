const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  stories: ['../src/stories/**/*.stories.(ts|tsx|js|jsx|mdx)'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
      //     the docs page from the markdown
      test: /\.(stories|story)\.mdx$/,
      use: [
        {
          loader: 'babel-loader',
          // may or may not need this line depending on your app's setup
          options: {
            plugins: ['@babel/plugin-transform-react-jsx'],
          },
        },
        {
          loader: '@mdx-js/loader',
          options: {
            compilers: [createCompiler({})],
          },
        },
      ],
    });

    return config;
  },
};

// module.exports = {
//   stories: ['../src/**/*.stories.(tsx|mdx)'],
// };

// const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

// module.exports = {
//   // 1. register the docs panel (as opposed to '@storybook/addon-docs' which
//   //    will configure everything with a preset)
//   addons: ['@storybook/addon-docs/register'],
//   // 2. manually configure webpack, since you're not using the preset
//   webpackFinal: async (config) => {
//     config.module.rules.push({
//       // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
//       //     the docs page from the markdown
//       test: /\.(stories|story)\.mdx$/,
//       use: [
//         {
//           loader: 'babel-loader',
//           // may or may not need this line depending on your app's setup
//           options: {
//             plugins: ['@babel/plugin-transform-react-jsx'],
//           },
//         },
//         {
//           loader: '@mdx-js/loader',
//           options: {
//             compilers: [createCompiler({})],
//           },
//         },
//       ],
//     });
//     // 2b. Run `source-loader` on story files to show their source code
//     //     automatically in `DocsPage` or the `Source` doc block.
//     config.module.rules.push({
//       test: /\.(stories|story)\.[tj]sx?$/,
//       loader: require.resolve('babel-loader'),
//       options: {
//         presets: [['react-app', { flow: false, typescript: true }]],
//       },
//     });
//     return config;
//   },
// };
