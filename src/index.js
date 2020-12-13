import React from 'react';
import ReactDOM from 'react-dom';

import './assets/main.scss';
import { Button, DropdownItem, Dropdown } from '../lib/components';

const wrapper = document.getElementById('root');

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative">
        <Button className="w-auto" onClick={handleOpen} type="danger">
          Open Dropdown&nbsp;&#8595;
        </Button>

        <Dropdown isOpen={open} onClose={handleClose} align="left">
          <DropdownItem>
            <div>Notifications</div>
            <div>3</div>
          </DropdownItem>
          <DropdownItem>
            <div>Friends</div>
          </DropdownItem>
          <DropdownItem>
            <div>Settings</div>
          </DropdownItem>
        </Dropdown>
      </div>
    </div>
  );
};

wrapper ? ReactDOM.render(<App />, wrapper) : false;
