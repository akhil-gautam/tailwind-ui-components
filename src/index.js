import React from 'react';
import ReactDOM from 'react-dom';

import './assets/main.scss';
import { TextInput } from '../lib/components';

const wrapper = document.getElementById('root');

const App = () => {
  return (
    <div className="flex justify-center items-center w-full h-full px-32">
      <TextInput className="w-2/3" error="there is an error" />
    </div>
  );
};

wrapper ? ReactDOM.render(<App />, wrapper) : false;
