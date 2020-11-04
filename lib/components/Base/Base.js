import React from "react";
import PropTypes from "prop-types";

const Base = React.forwardRef((props, ref) => {
  const {
    classes,
    component: Component = "div",
    rounded = true,
    shadow = "md",
    variant = "raised",
    ...rest
  } = props;

  return <Component className={} ref={ref} {...rest} />;
});

Paper.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
  component: PropTypes.elementType,
  shadow: PropTypes.string,
  rounded: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(["raised", "bordered"]),
    PropTypes.string,
  ]),
};

export default withStyles(styles, { name: "MuiPaper" })(Paper);
