import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './assets/main.scss';
import { Alert, ListItem, List } from '../lib/components';

const wrapper = document.getElementById('root');

const App = () => {
  const [isOpen, setopen] = useState(true);
  const onClose = () => setopen(false);

  return (
    <div className='flex flex-col justify-center items-center w-full mt-8 px-32 bg-amber-200'>
      <Alert onClose={() => (alert('hello'))}>This is a message for you.</Alert>
      <Alert onClose={() => (alert('hello'))} variant="default" type="warning">This is a message for you.</Alert>
      <Alert onClose={() => (alert('hello'))} variant="filled" type="error">This is a message for you.</Alert>
      <List>
        <ListItem>This is a beautiful text.</ListItem>
        <ListItem>This is a beautiful text.</ListItem>
        <ListItem>This is a beautiful text.</ListItem>
        <ListItem>This is a beautiful text.</ListItem>
        <ListItem>This is a beautiful text.</ListItem>
        <ListItem>This is a beautiful text.</ListItem>
        <ListItem>This is a beautiful text.</ListItem>
      </List>
    </div>
  );
};

wrapper ? ReactDOM.render(<App />, wrapper) : false;
