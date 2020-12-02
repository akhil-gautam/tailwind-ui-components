import React from 'react';
import ReactDOM from 'react-dom';

import './assets/main.scss';
import Badge from '../lib/components/Pill/Pill';

const wrapper = document.getElementById('root');

const App = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Badge type="success">cool</Badge>
    </div>
  );
};

wrapper ? ReactDOM.render(<App />, wrapper) : false;
