import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { ThemeContext } from '../Util';

const Avatar = React.forwardRef((props, ref) => {
  const {
    src,
    altText,
    rounded = 'full',
    size = 'large',
    className,
    ...rest
  } = props;

  const {
    theme: { avatar },
  } = useContext(ThemeContext);

  const classes = classNames(
    avatar.base,
    { 'rounded-full': rounded === 'full' },
    { 'rounded-lg': rounded === 'semi' },
    avatar.size[size],
    className
  );

  const imgClasses = classNames(
    rounded === 'full' ? 'rounded-full' : 'rounded-lg',
    'h-full w-full object-cover'
  );

  return (
    <div className={classes} {...rest}>
      <img
        src={src}
        alt={altText || ''}
        loading='lazy'
        className={imgClasses}
      />
    </div>
  );
});

Avatar.propTypes = {
  src: PropTypes.string,
  altText: PropTypes.string,
  rounded: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

export default Avatar;
