import React from 'react';
import defaultTheme from '../themes/default';

export const BGCOLOR_MAP = {
  primary: 'bg-blue-600',
  success: 'bg-green-400',
  danger: 'bg-red-500',
  white: 'bg-white',
};

export const TXTCOLOR_MAP = {
  primary: 'text-white',
  success: 'text-white',
  danger: 'text-white',
  white: 'text-black',
};

export const ErrOut = (message) => {
  console.error(
    `%c ${message}`,
    'font-weight: 200;color: white;background: red; padding:0.2rem 1rem; border-rounded:8px;'
  );
};

export const ThemeContext = React.createContext({ theme: defaultTheme });
