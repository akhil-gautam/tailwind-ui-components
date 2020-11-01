import React from "react";
import PropTypes from "prop-types";

import { BGCOLOR_MAP, TXTCOLOR_MAP } from "./Util";

const Button = ({
  classes,
  bg,
  radius,
  shadow,
  color,
  hoverAnimation,
  disabled,
  children,
  ...rest
}) => {
  return (
    <div className="flex items-center">
      {children}
      <button
        className={`w-auto ${children && "ml-2"} px-4 py-2 ${classes || ""} ${
          bg ? BGCOLOR_MAP[bg] : "bg-gray-300"
        } rounded-${radius || "sm"} shadow-${shadow || "md"} ${
          TXTCOLOR_MAP[color] || "text-black"
        } ${hoverAnimation && "hover:shadow-sm"} ${
          disabled && "cursor-not-allowed"
        }`}
        {...rest}
      >
        Primary
      </button>
    </div>
  );
};

Button.proptypes = {
  classes: PropTypes.string,
  bg: PropTypes.string,
  radius: PropTypes.string,
  shadow: PropTypes.string,
  color: PropTypes.string,
  hoverAnimation: PropTypes.string,
  disabled: PropTypes.string,
};


export default Button;
