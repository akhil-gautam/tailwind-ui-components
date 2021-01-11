import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

const Td = React.forwardRef((props, ref) => {
  const { children, className, ...other } = props;
  const {
    theme: {
      td: { base },
    },
  } = useContext(ThemeContext);

  return (
    <td className={classNames(base, className)} ref={ref} {...other}>
      {children}
    </td>
  );
});

Td.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Td;
