import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './assets/main.scss';
import { List, ListItem } from '../lib/components';

const wrapper = document.getElementById('root');

const App = () => {
  const [isOpen, setopen] = useState(true);
  const onClose = () => setopen(false);

  return (
    <div className='flex justify-center items-center w-full h-full px-32 bg-amber-200'>
      <List header="This marks the heading">
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
