import React from "react";
import PropTypes from "prop-types";

import Base from "../Base/Base";
import { ErrOut } from "../Util";

const TwoRowCard = ({
  imgSrc = "",
  altText = "",
  content = "",
  baseClasses = "",
  imgClasses = "",
  contentClasses = "",
}) => {
  if (imgSrc.length == 0 || altText.length == 0 || content.length == 0) {
    ErrOut(
      "Returned null. Make sure you have passed <imgSrc, altText, content> as they are required!"
    );
    return null;
  }
  return (
    <Base classes={`flex flex-col ${baseClasses}`} radius="md" shadow="xl">
      <img src={imgSrc} alt={altText} className={`object-cover rounded-md  ${imgClasses}`} />
      <div className={`px-2 text-justify py-2 ${contentClasses}`}>
        {content}
      </div>
    </Base>
  );
};

TwoRowCard.propTypes = {
  baseClasses: PropTypes.string,
  imgClasses: PropTypes.string,
  contentClasses: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TwoRowCard;
