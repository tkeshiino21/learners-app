import React from 'react';
import { Input, Label } from '../components/atoms';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const InputStories = () => (
  <>
    <Label>お名前</Label>
    <Input className="outlined" />
  </>
);
