import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './assets/main.scss';

import { Alert, Select, Option } from '../lib/components';

const wrapper = document.getElementById('root');

const App = () => {
  const [isOpen, setopen] = useState(true);
  const onClose = () => setopen(false);

  return (
    <div className='flex flex-col justify-center items-center w-full mt-8 px-32 bg-amber-200'>
      <Alert onClose={() => alert('hello')}>This is a message for you.</Alert>
      <Alert onClose={() => alert('hello')} variant='default' type='warning'>
        This is a message for you.
      </Alert>
      <Select aria-label='select'>
        <Option>Elephant</Option>
        <Option>Caterpillar</Option>
        <Option>Potasium</Option>
      </Select>
    </div>
  );
};

const BellIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
    />
  </svg>
);

wrapper ? ReactDOM.render(<App />, wrapper) : false;
