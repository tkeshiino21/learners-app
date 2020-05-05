import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { Button } from '../components/atoms';

export default {
  title: 'atoms',
  component: Button,
};

export const ButtonSt = () => (
  <Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>
    {text('Change', 'hello')}
  </Button>
);

ButtonSt.story = {
  name: 'Button',
  // parameters: {
  //   notes: 'a small component',
  // },
};
