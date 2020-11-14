import React from "react";
import PropTypes from "prop-types";

import Base from "../Base/Base";
import { ErrOut } from "../Util";

const ThreeRowCard = ({
  imgSrc = "",
  altText = "",
  content = "",
  baseClasses = "",
  imgClasses = "",
  contentClasses = "",
  actionAreaClasses = "",
  children,
  ...rest
}) => {
  if (
    imgSrc.length == 0 ||
    altText.length == 0 ||
    content.length == 0 ||
    !children
  ) {
    ErrOut(
      "Returned null. Make sure you have passed <children, imgSrc, altText, content> as they are required!"
    );
    return null;
  }
  return (
    <Base
      classes={`flex flex-col ${baseClasses}`}
      rounded="md"
      shadow="xl"
      {...rest}
    >
      <img
        src={imgSrc}
        alt={altText}
        className={`object-cover rounded-md  ${imgClasses}`}
      />
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

ThreeRowCard.propTypes = {
  children: PropTypes.node.isRequired,
  baseClasses: PropTypes.string,
  imgClasses: PropTypes.string,
  contentClasses: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ThreeRowCard;
