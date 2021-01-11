import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

const Tr = React.forwardRef((props, ref) => {
  const { children, className, type = 'odd', ...other } = props;
  const {
    theme: {
      tr: { base },
    },
  } = useContext(ThemeContext);

  return (
    <tr className={classNames(className, base[type])} ref={ref} {...other}>
      {children}
    </tr>
  );
});

Tr.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Tr;
