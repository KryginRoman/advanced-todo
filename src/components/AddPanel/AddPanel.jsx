import React, {useState} from 'react';

import './AddPanel.scss';

import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import ColorList from './ColorList/ColorList';

export default ({ colors, onHide, onClick }) => {
  const [inputValue, setInputValue] = useState("");
  const [activeColorId, setActiveColorId] = useState(colors[0].id);
  const onChangeInputHandler = e => setInputValue(e.target.value);
  const onCloseHandler = () => {
    setInputValue("");
    setActiveColorId(colors[0].id);
    onHide();
  }
  const onAddHandler = () => {
    onClick(inputValue, activeColorId);
    onCloseHandler();
  }

  return (
    <div className="add-panel">
      <div className="add-panel__field">
        <TextInput
          value={inputValue}
          placeholder="Название папки"
          onChange={onChangeInputHandler}
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
          onClick={() => onAddHandler()}
        />
      </div>
      <div
        className="add-panel__close"
        onClick={() => onCloseHandler()}
      />
    </div>
  )
}