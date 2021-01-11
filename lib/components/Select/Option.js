import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

const Option = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;

  const {
    theme: { option },
  } = useContext(ThemeContext);
  const classes = classNames(option.base, className);

  return <option ref={ref} className={classes} {...props}></option>;
});

Option.propTypes = {
  className: PropTypes.string,
};

export default Option;
