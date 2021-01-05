import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../Util';

const Table = React.forwardRef((props, ref) => {
  const { children, className, separated = false, ...other } = props;
  console.log(separated);
  const {
    theme: {
      table: { container, base, scroller },
    },
  } = useContext(ThemeContext);

  const tableClasses = classNames(base, className, {
    'border-spaced': separated,
  });
  const containerClasses = classNames(container, {
    'shadow-none rounded-none': separated,
  });

  return (
    <div className={containerClasses}>
      <div className={scroller}>
        <table className={tableClasses} ref={ref} {...other}>
          {children}
        </table>
      </div>
    </div>
  );
});

export default Table;
