import React from 'react';
import ReactDOM from 'react-dom';

import './assets/main.scss';
import Badge from '../lib/components/Badge/Badge';

const wrapper = document.getElementById('root');

const App = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Badge type="primary">cool</Badge>
    </div>
  );
};

wrapper ? ReactDOM.render(<App />, wrapper) : false;
