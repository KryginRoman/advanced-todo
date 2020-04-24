import React from 'react';

import './ColorList.scss';

export default ({ colorList, activeColorId, onClick }) => {
  return (
    <ul className="color-list">
      {
        colorList.map(({ id, name }) => {
          const classList = ["color-list__item"];

          if (activeColorId === id) classList.push("color-list__item_active");

          return <li
                    className={classList.join(" ")}
                    onClick={() => onClick(id)}
                    data-color={name}
                    key={id}
                 />
        })
      }
    </ul>
  )
}