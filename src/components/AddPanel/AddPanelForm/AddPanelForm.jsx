import React, {useState} from 'react';

import Button from '../../Button/Button';
import TextInput from '../../TextInput/TextInput';
import ColorList from '../ColorList/ColorList';

import './AddPanelForm.scss';

export default ({ colors, onSubmit, onClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [activeColorId, setActiveColorId] = useState(colors[0].id);

  const onChangeHandler = ({ target }) => setInputValue(target.value);
  const onCloseHandler = () => {
    setInputValue("");
    setActiveColorId(colors[0].id);
    onClose();
  }
  const onSubmitHandler = () => {
    onSubmit(inputValue, activeColorId)
    onCloseHandler();
  }

  return (
    <form className="add-panel__popup" onSubmit={onSubmitHandler}>
      <div className="add-panel__field">
        <TextInput
          value={inputValue}
          placeholder="Название папки"
          onChange={onChangeHandler}
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
          type="submit"
        />
      </div>
      <div
        className="add-panel__close"
        onClick={onCloseHandler}
      />
    </form>
  )
}
