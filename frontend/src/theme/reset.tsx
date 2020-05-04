import React from 'react';
import { Global } from '@emotion/core';

export default () => (
  <Global
    styles={() => ({
      body: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        fontFamily:
          'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        color: '#1f1f1f',
      },
    })}
  />
);
