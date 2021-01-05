import React, { useContext } from 'react';
import classNames from 'classnames';

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

export default Tfoot;
