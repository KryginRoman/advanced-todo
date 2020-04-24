import React from 'react';

import './Button.scss';

export default ({ textButton, onClick }) => {
  return (
    <button
      className="button"
      type="button"
      onClick={onClick}
    >
      {textButton}
    </button>
  )
}