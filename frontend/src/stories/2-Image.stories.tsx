import React from 'react';
import { Image } from '../components/atoms';
import book1 from '../images/book1.jpeg';

export default {
  title: 'Atoms/Image',
  component: Image,
};

export const ImageStories = () => <Image className="container" src={book1} />;
