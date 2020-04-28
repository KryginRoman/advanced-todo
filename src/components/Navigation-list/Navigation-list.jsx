import React from 'react';

import NavItem from './Navigation-item/Navigation-item';

import './Navigation-list.scss';

export default ({ navigationItems, activeListItem, removableItem, onClickItem, onRemove }) => {
  return (
    <ul className="navigation">
      {
        navigationItems.map(({ icon, name, active, colorName, id }) => {
          return <NavItem
                    icon={icon}
                    name={name}
                    active={active || (activeListItem === id)}
                    removable={removableItem}
                    defaultIconColor={colorName}
                    key={id}
                    onClick={onClickItem && (() => onClickItem(id))}
                    onRemove={onRemove && (() => onRemove(id))}
                 />
        })
      }
    </ul>
  )
}