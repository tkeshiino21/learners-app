import React from 'react';
import { Button } from '../components/atoms';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const ButtonStories = () => (
  <Button className="primary">送信する</Button>
);

export const Primary = () => <Button className="primary">送信する</Button>;

export const Outlined = () => <Button className="outlined">送信する</Button>;

export const Grey = () => <Button className="grey">送信する</Button>;

export const Text = () => <Button className="text">送信する</Button>;

export const Stretch = () => <Button className="stretch">送信する</Button>;

export const Large = () => <Button className="large">送信する</Button>;
