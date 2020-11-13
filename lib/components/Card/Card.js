import React from "react";
import PropTypes from "prop-types";
import Base from "../Base/Base";

const Card = ({ children, classes, ...rest }) => {
  return (
    <Base classes={`flex flex-col p-2 w-auto h-auto ${classes}`} {...rest}>
      {children}
    </Base>
  );
};

export default Card;
