import React from 'react';

import NavItem from './Navigation-item/Navigation-item';

import './Navigation-list.scss';

export default ({ navigationItems }) => {
  return (
    <ul className="navigation">
      {
        navigationItems.map(({ icon, text, removable, color, id }) => {
          return <NavItem
                    icon={icon}
                    text={text}
                    active={true}
                    removable={removable}
                    defaultIconColor={color}
                    key={id}
                 />
        })
      }
    </ul>
  )
}