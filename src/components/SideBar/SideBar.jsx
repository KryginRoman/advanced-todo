import React from 'react';

import NavList from './Navigation-list/Navigation-list';

import './SideBar.scss';

export default () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-navigation">
        <div className="sidebar-navigation_main">
          <NavList navigationItems={[
            {
              text: "Все задачи",
              removable: false,
              color: "green",
              id: 5
            }
          ]} />
        </div>
        <div className="sidebar-navigation_tasks">
          <NavList navigationItems={[
            {
              text: "Учеба",
              removable: true,
              color: "pink",
              id: 1
            },
            {
              text: "Спорт",
              removable: true,
              color: "blue",
              id: 2
            },
            {
              text: "Еда",
              removable: true,
              color: "green",
              id: 3
            },
            {
              text: "Путешествие",
              removable: true,
              color: "light-green",
              id: 4
            },
            {
              text: "Игры",
              removable: true,
              color: "green",
              id: 7
            }
          ]} />
        </div>
      </nav>
      <div className="sidebar__add-button">
        <NavList navigationItems={[
          {
              text: "Добавить папку",
              removable: false,
              color: "green",
              id: 100
          }
        ]} />
      </div>
    </div>
  )
}