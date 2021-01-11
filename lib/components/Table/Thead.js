import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

const Thead = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;
  const {
    theme: {
      thead: { base },
    },
  } = useContext(ThemeContext);

  return (
    <thead className={classNames(base, className)} ref={ref} {...other}>
      {children}
    </thead>
  );
});

Thead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Thead;
