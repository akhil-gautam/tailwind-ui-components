import React from 'react';
import PropTypes from 'prop-types';
import Base from '../Base/Base';

const Card = React.forwardRef((props, ref) => {
  const { children, shadow = 'md', rounded = 'md', classes, ...rest } = props;
  return (
    <Base
      classes={`flex flex-col p-2 w-auto h-auto ${classes}`}
      shadow={shadow}
      rounded={rounded}
      {...rest}
      ref={ref}
    >
      {children}
    </Base>
  );
});

Card.prototype = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  shadow: PropTypes.string,
  rounded: PropTypes.string,
};

export default Card;
