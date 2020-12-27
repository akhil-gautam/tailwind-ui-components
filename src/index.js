import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './assets/main.scss';
import { Modal, Button } from '../lib/components';

const wrapper = document.getElementById('root');

const App = () => {
  const [isOpen, setopen] = useState(true);
  const onClose = () => setopen(false);

  return (
    <div className="flex justify-center items-center w-full h-full px-32">
      <Modal isOpen={isOpen} onClose={onClose}>
        <header>
          <h4 className="font-bold text-lg mb-4">I'm a beautifull header</h4>
        </header>
        <div>This is a body element</div>
        <footer>
          <hr className="my-4"/>
          <div className="flex justify-end space-x-4">
          <Button />
          <Button />
          <Button />
          </div>

        </footer>
      </Modal>
    </div>
  );
};

wrapper ? ReactDOM.render(<App />, wrapper) : false;
