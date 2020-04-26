import React from 'react';

import './Button.scss';

export default ({ textButton, onClick, roleCancel }) => {
  const classList = ["button"];

  if (roleCancel) classList.push("button_grey");

  return (
    <button
      className={classList.join(" ")}
      type="button"
      onClick={onClick}
    >
      {textButton}
    </button>
  )
}