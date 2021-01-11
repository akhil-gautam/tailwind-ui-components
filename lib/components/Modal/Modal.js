import React, { useEffect, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

import Backdrop from '../Backdrop/Backdrop';
import { ErrOut, ThemeContext } from '../Util';

const Modal = React.forwardRef((props, ref) => {
  const { children, onClose, isOpen = false, className, ...other } = props;

  if (!children) {
    ErrOut(
      'Unable to find <children>. Make sure you have passed <children> because they are required to render Modal!'
    );
    return null;
  }

  const {
    theme: { modal },
  } = useContext(ThemeContext);

  function handleEsc(e) {
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose();
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, { capture: true });
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const classes = ClassNames(modal.base, className);

  const modalComponent = (
    <Backdrop onClick={onClose}>
      <div
        className={classes}
        role='dialog'
        onClick={(e) => e.stopPropagation()}
        ref={ref}
        {...other}
      >
        <header className='flex justify-end'>
          <button
            className={modal.xButton}
            aria-label='close'
            onClick={onClose}
          >
            <svg
              className='w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              role='img'
              aria-hidden='true'
            >
              <path
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
                fillRule='evenodd'
              ></path>
            </svg>
          </button>
        </header>
        {children}
      </div>
    </Backdrop>
  );

  return mounted && isOpen ? createPortal(modalComponent, document.body) : null;
});

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  className: PropTypes.string,
};

export default Modal;
