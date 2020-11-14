import React from "react";
import PropTypes from "prop-types";

import Base from "../Base/Base";
import { ErrOut } from "../Util";

const NoImageActionCard = ({
  content = "",
  baseClasses = "",
  contentClasses = "",
  actionAreaClasses = "",
  children,
  ...rest,
}) => {
  if ((!children, content.length == 0)) {
    ErrOut(
      "Returned null. Make sure you have passed <children, content> as they are required!"
    );
    return null;
  }
  return (
    <Base classes={`flex flex-col ${baseClasses}`} rounded="md" shadow="xl" {...rest}>
      <div className={`px-2 text-justify py-2 ${contentClasses}`}>
        {content}
      </div>
      <div
        className={`flex flex-row justify-between p-2 bg-blue-100 ${actionAreaClasses}`}
      >
        {children}
      </div>
    </Base>
  );
};

NoImageActionCard.propTypes = {
  children: PropTypes.node.isRequired,
  baseClasses: PropTypes.string,
  contentClasses: PropTypes.string,
  content: PropTypes.string.isRequired,
  actionAreaClasses: PropTypes.string,
};

export default NoImageActionCard;
