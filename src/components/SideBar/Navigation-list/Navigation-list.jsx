import React from 'react';

import NavItem from './Navigation-item/Navigation-item';

import './Navigation-list.scss';

export default ({ navigationItems, activeListItem, onClickItem, onRemove }) => {
  return (
    <ul className="navigation">
      {
        navigationItems.map(({ icon, name, active, removable, color, id }) => {
          return <NavItem
                    icon={icon}
                    name={name}
                    active={active || (activeListItem === id)}
                    removable={removable}
                    defaultIconColor={color}
                    key={id}
                    onClick={onClickItem && (() => onClickItem(id))}
                    onRemove={onRemove && (() => onRemove(id))}
                 />
        })
      }
    </ul>
  )
}