import React from 'react';

import './Checkbox.scss';

export default ({ checked, onChange }) => (
  <label className="checkbox">
    <input
      type="checkbox"
      onChange={onChange}
      className="checkbox__input"
      checked={checked}
    />
    <div className="checkbox__custom-box">
      <svg
        width="11"
        height="8"
        viewBox="0 0 11 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
          stroke="#FFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </label>
)