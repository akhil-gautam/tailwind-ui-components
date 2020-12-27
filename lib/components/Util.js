import React from 'react';
import defaultTheme from '../themes/default';


export const ErrOut = (message) => {
  console.error(
    `%c ${message}`,
    'font-size:1.2rem;font-weight: 100;color: white;background: red; padding:0.2rem 1rem; border-rounded:8px;'
  );
};

export const ThemeContext = React.createContext({ theme: defaultTheme });
