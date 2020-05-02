import React from 'react';

import NavItem from './Navigation-item/Navigation-item';

import './Navigation-list.scss';

export default ({ navigationItems, activeListItem, removableItem, onClickItem, onRemove }) => {
  return (
    <ul className="navigation">
      {
        navigationItems.map(({ icon, name, active, color, id }) => {
          return <NavItem
                    icon={icon}
                    name={name}
                    active={active && (activeListItem === id)}
                    removable={removableItem}
                    defaultIconColor={color && color.name}
                    key={id || Math.random()}
                    onClick={onClickItem && (() => onClickItem(id))}
                    onRemove={onRemove && (() => onRemove(id))}
                 />
        })
      }
    </ul>
  )
}