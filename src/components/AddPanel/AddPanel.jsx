import React, { useState } from 'react';

import './AddPanel.scss';

import AddPanelForm from './AddPanelForm/AddPanelForm';
import NavList from '../Navigation-list/Navigation-list';

export default ({ colors, onSubmit }) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopup);
  const onCloseHandler = () => setShowPopup(false);
  return (
    <div className="add-panel">
      <div
        className="add-panel__add-button"
        onClick={togglePopup}
      >
        <NavList
          navigationItems={[
            {
              name: "Добавить папку",
              active: showPopup,
              icon: (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1V11"
                    stroke="#868686"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 6H11"
                    stroke="#868686"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )
            }
          ]}
        />
      </div>
      {showPopup && (
        <AddPanelForm
          colors={colors}
          onSubmit={onSubmit}
          onClose={onCloseHandler}
        />
      )}
    </div>
  )
}