import React, { useContext } from 'react';
import classNames from 'classnames';

import { ThemeContext } from '../Util';
import Item from './Item';

const List = React.forwardRef((props, ref) => {
  const {
    children,
    header,
    Component = 'ul',
    headerClassName,
    className,
    ...rest
  } = props;

  const {
    theme: {
      list: { base, header: headerStyle },
    },
  } = useContext(ThemeContext);

  const classes = classNames(base, className);
  const headerClasses = classNames(headerStyle, headerClassName);

  return (
    <Component ref={ref} className={classes} {...rest}>
      {header && <li className={headerClasses}>{header}</li>}
      {children}
    </Component>
  );
});

export default List;
