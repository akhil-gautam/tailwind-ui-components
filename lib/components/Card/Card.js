import React from "react";
import PropTypes from "prop-types";
import Base from "../Base/Base";

const Card = ({ children, classes }) => {
  return (
    <Base classes={`flex flex-col p-2 w-auto h-auto ${classes}`}>
      {children}
    </Base>
  );
};

export default Card;
