import React from 'react';

import './Button.scss';

export default ({ textButton,  type, onClick, roleCancel }) => {
  const classList = ["button"];

  if (roleCancel) classList.push("button_grey");

  return (
    <button
      className={classList.join(" ")}
      type={type}
      onClick={onClick}
    >
      {textButton}
    </button>
  )
}