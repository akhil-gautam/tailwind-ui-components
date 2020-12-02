import React, { useContext, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { ErrOut, ThemeContext } from '../Util';

const List = React.forwardRef((props, ref) => {
  const { children, isOpen = false, onClose, className = '', ...rest } = props;

  if (!children) {
    ErrOut(
      'Unable to find <children>. Make sure you have passed <children> because they are required!'
    );
    return null;
  } else if (!isOpen) {
    return null;
  }
  const dropdownRef = useRef(null);

  const handleEscapeKey = (e) => {
    // Shouldn't use keyCode: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    // 'Esc': IE/Edge specific
    if (e.key === 'Esc' || e.key === 'Escape') {
      onClose();
    }
  };

  const clickedOut = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', clickedOut);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('click', clickedOut);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const {
    theme: {
      dropdown: { list },
    },
  } = useContext(ThemeContext);

  const classes = classNames(list.base, className);

  return (
    <div ref={ref}>
      <ul className={classes} ref={dropdownRef}>
        {children}
      </ul>
    </div>
  );
});

export default List;
