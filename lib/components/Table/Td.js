import React, {useContext} from 'react';

import { ErrOut, ThemeContext } from '../Util';

const Td = React.forwardRef((props, ref) => {
  const { children, ...other } = props;
  const {
    theme: {
      td: { base },
    },
  } = useContext(ThemeContext);

  return (
    <td className={base} ref={ref} {...other}>
      {children}
    </td>
  );
});

export default Td;
