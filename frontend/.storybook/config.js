import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

function loadStories() {
  let req = require.context('../src/stories/', true, /.(tsx|mdx)$/);
  // req.keys().forEach((filename) => req(filename));
  return req
    .keys()
    .map(req)
    .filter((req) => Boolean(req.default));
}

const newViewports = {
  kindelFire2: {
    name: 'Kindle Fire 2',
    styles: { width: '600px', height: '963px' },
  },
};

addDecorator(withA11y);
addDecorator(withKnobs);

addParameters({
  options: {
    showNav: true,
    showPanel: true,
  },
  viewport: { viewports: newViewports },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

configure(loadStories, module);
