import React from 'react';

import NavItem from './Navigation-item/Navigation-item';

import './Navigation-list.scss';

export default ({ navigationItems }) => {
  return (
    <ul className="navigation">
      {
        navigationItems.map(({ icon, name, removable, color, id }) => {
          return <NavItem
                    icon={icon}
                    name={name}
                    active={false}
                    removable={removable}
                    defaultIconColor={color}
                    key={id}
                 />
        })
      }
    </ul>
  )
}