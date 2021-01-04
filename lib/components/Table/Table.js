import React, {useContext} from 'react';

import { ErrOut, ThemeContext } from '../Util';

const Table = React.forwardRef((props, ref) => {
  const { children, ...other } = props;
  const {
    theme: {
      table: { root, base, scroller },
    },
  } = useContext(ThemeContext);

  return (
    <div className={root}>
      <div className={scroller}>
        <table className={base} ref={ref} {...other}>
          {children}
        </table>
      </div>
    </div>
  );
});

export default Table;
