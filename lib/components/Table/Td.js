import React, {useContext} from 'react';
import classNames from 'classnames';

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

export default Td;
