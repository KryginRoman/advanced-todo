import React from 'react';

import NavItem from './Navigation-item/Navigation-item';

import './Navigation-list.scss';

export default ({ navigationItems, activeListId, onRemove, onClick, onSetActive }) => {
  return (
    <ul className="navigation" onClick={onClick}>
      {
        navigationItems.map(({ icon, name, removable, color, id }) => {
          return <NavItem
                    icon={icon}
                    name={name}
                    active={activeListId === id}
                    removable={removable}
                    defaultIconColor={color}
                    key={id}
                    onRemove={() => onRemove(id)}
                    onClick={() => onSetActive(id)}
                 />
        })
      }
    </ul>
  )
}