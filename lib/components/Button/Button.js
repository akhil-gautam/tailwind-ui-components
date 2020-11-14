import React from "react";
import PropTypes from "prop-types";

import { BGCOLOR_MAP, TXTCOLOR_MAP, ErrOut } from "../Util";

//TODO: Add tests
// TODO: Add support for startIcon and endIcon

const Button = React.forwardRef((props, ref) => {
  const {
    label = "Button",
    classes = "",
    bg,
    rounded = "sm",
    shadow = "md",
    color,
    hoverAnimation = false,
    disabled = false,
    children,
    ...rest
  } = props;
  if (!children) {
    ErrOut(
      "Returned null. A child element is required, it serves as the label of the button!"
    );
    return null;
  }
  return (
    <button
      className={`
          w-auto ${children && "ml-2"} px-4 py-2 ${
        bg ? BGCOLOR_MAP[bg] : "bg-gray-300"
      } rounded-${rounded} shadow-${shadow} ${
        TXTCOLOR_MAP[color] || "text-black"
      } ${hoverAnimation && "hover:shadow-sm"} ${
        disabled && "cursor-not-allowed"
      } ${classes}`}
      ref={ref}
      {...rest}
    >
      <span className="flex items-center ">{children}</span>
    </button>
  );
});

Button.proptypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  bg: PropTypes.string,
  rounded: PropTypes.string,
  shadow: PropTypes.string,
  color: PropTypes.string,
  hoverAnimation: PropTypes.string,
  disabled: PropTypes.string,
};

export default Button;
