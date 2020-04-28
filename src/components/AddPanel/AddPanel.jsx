import React, {useState} from 'react';

import './AddPanel.scss';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import ColorList from './ColorList/ColorList';
import NavList from '../Navigation-list/Navigation-list';

export default ({ colors, onClick }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeColorId, setActiveColorId] = useState(colors[0].id);
  const togglePopup = () => setShowPopup(!showPopup);
  const onChangeInputHandler = e => setInputValue(e.target.value);
  const onCloseHandler = () => {
    setInputValue("");
    setActiveColorId(colors[0].id);
    setShowPopup(false);
  }
  const onAddHandler = () => {
    onClick(inputValue, activeColorId);
    onCloseHandler();
  }
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
              removable: false,
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
              ),
              id: Math.random()
            }
          ]}
        />
      </div>
      {showPopup && (
        <div className="add-panel__popup">
          <div className="add-panel__field">
            <TextInput
              value={inputValue}
              placeholder="Название папки"
              onChange={onChangeInputHandler}
              autofocus={true}
            />
          </div>
          <div className="add-panel__colors">
            <ColorList
              colorList={colors}
              activeColorId={activeColorId}
              onClick={setActiveColorId}
            />
          </div>
          <div className="add-panel__button">
            <Button
              textButton="Добавить"
              onClick={onAddHandler}
            />
          </div>
          <div
            className="add-panel__close"
            onClick={onCloseHandler}
          />
        </div>
      )}
    </div>
  )
}