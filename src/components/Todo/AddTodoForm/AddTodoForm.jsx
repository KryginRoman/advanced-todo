import React, {useState, useEffect} from 'react';

import NavList from '../../Navigation-list/Navigation-list';
import Popup from '../../Popup/Popup';

export default ({ onAdd, listId }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [fieldValue, setFieldValue] = useState("");
  const onOpenHandler = () => setShowPopup(true);
  const onCloseHandler = () => {
    setFieldValue("");
    setShowPopup(false);
  }
  const onConfirmHanler = () => {
    onAdd(listId, fieldValue);
    setFieldValue("");
    setShowPopup(false);
  }
  const onChangeHandler = ({ target }) => setFieldValue(target.value);

  useEffect(() => {
    onCloseHandler();
  }, [listId]);
  
  return (
    <div className="add-todo">
      {showPopup
        ? (
          <Popup
            submitButtonText="Добавить задачу"
            rejectButtonText="Отмена"
            fieldValue={fieldValue}
            fieldPlaceholder="Текст задачи"
            onChange={onChangeHandler}
            onSubmit={onConfirmHanler}
            onReject={onCloseHandler}
          />
        )
        : (         
          <div
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
        )
      }
    </div>
  )
}