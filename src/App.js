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
  const [activeListId, setActiveListId] = useState(lists[0].id);
  // const [activeTodo, setActiveTodo] = useState(todos.find(todo => todo.listId === activeListId));

  const removeListItem = id => {
    const newLists = lists.filter(list => list.id !== id);

    setLists(newLists);
    setActiveListId(newLists[0].id);
  }
  const addListItem = (name, colorId) => {
    const newItem = {
          name,
          colorId,
          id: lists.length + 1
        }
    const newLists = [...lists, newItem];
    return setLists(newLists);
  }
  const setActiveListIdHandler = id => setActiveListId(id);
  // const setActiveTodoHandler = () => setActiveTodo(todos.find(todo => todo.listId === activeListId));

  return (
    <div className="app">
      <SideBar 
        navList={lists}
        colors={colors}
        activeListId={activeListId}
        onRemove={removeListItem}
        onAdd={addListItem}
        onSetActive={setActiveListIdHandler}
      />
      {/* <Todo
        title={lists.find(list => list.id === activeListId).name} 
        todos={activeTodo} 
        setActiveTodo={setActiveTodoHandler}
      /> */}
    </div>
  );
}
