import React, { useContext, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ErrOut, ThemeContext } from '../Util';

const Breadcrumbs = React.forwardRef((props, ref) => {
  const { children, variant = 'default', separator = '/', className, ...rest } = props;

  if (!children) {
    ErrOut(
      'Returned null. A child element is required, it serves as the content of the breadcrumbs!'
    );
    return null;
  }

  const {
    theme: { breadcrumbs },
  } = useContext(ThemeContext);

  const classes = classNames(breadcrumbs.base, breadcrumbs[variant], className);

  return (
    <nav className={classes} aria-label="breadcrumb">
        <ol className="">
            {children.map( (link, index) => {
                return (
                    <li key={index} className="inline mr-3">
                        {link}
                        <span aria-hidden="true" className="ml-3 text-current">
                            {!(index == children.length-1) && separator}
                        </span>
                    </li>
                )

            })
            }
        </ol>
    </nav>
  );
});

Breadcrumbs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.string,
  separator: PropTypes.string
};

export default Breadcrumbs;
