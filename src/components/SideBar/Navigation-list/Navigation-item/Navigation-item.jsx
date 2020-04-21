import React from 'react';

import './Navigation-item.scss';

export default ({ icon, text, onClick, active, removable, defaultIconColor }) => {
  const classList = ["navigation-item"];

  if (active) classList.push("navigation-item_active");

  return (
    <li className={classList.join(" ")} onClick={onClick}>
      <div className="navigation-item__icon">
        {icon ? icon : <div className="navigation-item__icon-default" data-color={defaultIconColor}></div>}
      </div>
      <span className="navigation-item__text">{text}</span>
      {removable ? <div className="navigation-item__remove"></div> : null}
    </li>
  )
}