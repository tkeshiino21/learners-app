import React from 'react';
import book1 from '../images/book1.jpeg';
import { Input, Label } from '../components/atoms/Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const InputStories = () => (
  <>
    <Label>お名前</Label>
    <Input className="outlined" src={book1} />
  </>
);
