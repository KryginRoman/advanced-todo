import React from 'react';

import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

import './Popup.scss';

export default ({
  submitButtonText, 
  rejectButtonText,
  fieldValue,
  fieldPlaceholder,
  onChange,
  onSubmit, 
  onReject
}) => {
  const onSubmitHandler = e => {
    e.preventDefault();
    onSubmit();
  }
  return (
    <form 
      className="popup"
      onSubmit={onSubmitHandler}
    >
      <div className="popup__text-field">
        <TextInput
          value={fieldValue}
          placeholder={fieldPlaceholder}
          onChange={onChange}
          autofocus={true}
        />
      </div>
      <div className="popup__buttons">
        <div className="popup__buttons__submit">
          <Button
            textButton={submitButtonText}
            type="submit"
          />
        </div>
        <div className="popup__buttons__reject">
          <Button
            textButton={rejectButtonText}
            type="button"
            onClick={onReject}
            roleCancel={true}
          />
        </div>
      </div>
    </form>
  )
}