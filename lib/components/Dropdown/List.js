import React, { useContext, useRef, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ErrOut, ThemeContext } from '../Util';

const List = React.forwardRef((props, ref) => {
  const {
    children,
    isOpen = false,
    align = 'left',
    onClose,
    className,
    ...rest
  } = props;

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
      dropdown: { list, align: alignStyle },
    },
  } = useContext(ThemeContext);

  const classes = classNames(list.base, alignStyle[align], className);

  return (
    <div ref={ref}>
      <ul className={classes} ref={dropdownRef}>
        {children}
      </ul>
    </div>
  );
});

List.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  align: PropTypes.string,
  onClose: PropTypes.bool,
  className: PropTypes.string,
};

export default List;
