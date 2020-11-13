import React from "react";
import PropTypes from "prop-types";

const Base = React.forwardRef((props, ref) => {
  const {
    classes,
    component: Component = "div",
    bordered = false,
    radius = "none",
    shadow = "none",
    ...rest
  } = props;

  return (
    <Component
      className={`bg-white rounded-${radius} ${
        bordered && "border border-gray-400"
      } shadow-${shadow} ${classes}`}
      ref={ref}
      {...rest}
    />
  );
});

Base.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  component: PropTypes.elementType,
  shadow: PropTypes.string,
  radius: PropTypes.string,
};

export default Base;
