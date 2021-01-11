import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

const Tfoot = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;
  const {
    theme: {
      tfoot: { base },
    },
  } = useContext(ThemeContext);

  return (
    <tfoot className={classNames(base, className)} ref={ref} {...other}>
      {children}
    </tfoot>
  );
});

Tfoot.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Tfoot;
