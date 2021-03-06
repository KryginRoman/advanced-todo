import React from 'react';

import './TextInput.scss';

export default ({ value, autofocus, placeholder, onChange }) => (
  <input
    className="text-input"
    type="text"
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    autoFocus={autofocus}
  />
)