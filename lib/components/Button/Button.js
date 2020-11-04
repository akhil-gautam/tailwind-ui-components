import React from "react";
import PropTypes from "prop-types";

import { BGCOLOR_MAP, TXTCOLOR_MAP } from "../Util";

//TODO: Add tests
// TODO: Add support for startIcon and endIcon

const Button = React.forwardRef((props, ref) => {
  const {
    label = "Button",
    classes = "",
    bg,
    radius = "sm",
    shadow = "md",
    color,
    hoverAnimation = false,
    disabled = false,
    children,
    ...rest
  } = props;
  if (!children) {
    console.error(
      "%c Returned null. A child element is required, it serves as the button's label!",
      "font-weight: 200;color: white;background: red; padding:0.2rem 1rem; border-radius:8px;"
    );
    return null;
  }
  return (
    <button
      className={`
          w-auto ${children && "ml-2"} px-4 py-2 ${
        bg ? BGCOLOR_MAP[bg] : "bg-gray-300"
      } rounded-${radius} shadow-${shadow} ${
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
  radius: PropTypes.string,
  shadow: PropTypes.string,
  color: PropTypes.string,
  hoverAnimation: PropTypes.string,
  disabled: PropTypes.string,
};

export default Button;
