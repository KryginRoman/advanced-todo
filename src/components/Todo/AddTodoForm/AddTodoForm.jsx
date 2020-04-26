import React, {useState} from 'react';

import NavList from '../../SideBar/Navigation-list/Navigation-list';
import TextInput from '../../TextInput/TextInput';
import Button from '../../Button/Button';

import './AddTodoForm.scss';

export default ({ onAdd }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [fieldValue, setFieldValue] = useState("");
  const onOpenHandler = () => setShowPopup(true);
  const onCloseHandler = () => {
    setFieldValue("");
    setShowPopup(false);
  }
  const onAddTodoHanler = () => {
    console.log("add")
  }
  const onChangeHandler = ({ target }) => setFieldValue(target.value);
  return (
    <div className="add-todo">
      {!showPopup
        ? <div
            className="add-todo__button"
            onClick={onOpenHandler}
          >
            <NavList
              navigationItems={[
                {
                  name: "Новая задача",
                  removable: false,
                  icon: (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1V15"
                        stroke="#B4B4B4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 8H15"
                        stroke="#B4B4B4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                  id: 1414141
                }
              ]}
            />
          </div>
        : <div className="add-todo__form">
            <div className="add-todo__form__field">
              <TextInput
                value={fieldValue}
                placeholder="Текст задачи"
                onChange={onChangeHandler}
              />
            </div>
            <div className="add-todo__form__buttons">
              <div className="add-todo__form__confirm">
                <Button
                  textButton="Добавить задачу"
                  onClick={onAddTodoHanler}
                />
              </div>
              <div className="add-todo__form__reject">
                <Button
                  textButton="Отмена"
                  onClick={onCloseHandler}
                />
              </div>
            </div>
          </div>
      }
    </div>
  )
}