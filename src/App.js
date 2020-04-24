import React, {useState} from 'react';

import SideBar from './components/SideBar/SideBar';
import Todo from './components/Todo/Todo';

import db from './db/db.json';

import './App.scss';

export default () => {
  const [colors, setColors] = useState(db.colors);
  const [todos, setTodos] = useState(db.tasks);
  const [lists, setLists] = useState(db.lists.map(list => {
    return {
      ...list,
      removable: true,
      color: colors.find(color => color.id === list.colorId).name
    }
  }));

  return (
    <div className="app">
      <SideBar navList={lists} />
      <Todo title="Фронтенд" todos={[{completed: false, text: "Изучить чето", id: 1},{completed: true, text: "gag", id: 2}]} />
    </div>
  );
}
