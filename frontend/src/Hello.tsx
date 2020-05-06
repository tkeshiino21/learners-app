import * as React from 'react';

interface Props {
  name: string;
}

// 1800 x 800

const style = {
  height: 200,
};

export default ({ name }: Props) => (
  <img
    style={style}
    src="http://jsquaredohio.com/wp-content/uploads/AdobeStock_81134804-1800x800.jpg"
    alt={name}
  />
);
