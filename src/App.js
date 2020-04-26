import React, {useState, useEffect } from 'react';
import {Route ,useHistory} from 'react-router-dom';

import SideBar from './components/SideBar/SideBar';
import Todo from './components/Todo/Todo';

import db from './db/db.json';

import './App.scss';

export default () => {
  console.log(1)
  const history = useHistory();
  const [lists, setLists] = useState(db.lists);
  const [activeListItem, setActiveListItem] = useState(null);

  useEffect(()=> {
    const listId = history.location.pathname.split('list/')[1];
    setActiveListItem(listId);
  }, [history.location.pathname]);

  const removeListItem = id => {
    const newLists = lists.filter(list => list.id !== id);

    setLists(newLists);
  }
  const addListItem = (name, colorId) => {
    const newItem = {
          name,
          colorId,
          id: lists.length + 1
        }
    const newLists = [...lists, newItem];
    setLists(newLists);
  }
  const addTodoItem = (listId, text) => {
    const todo = {
      listId,
      text,
      completed: false
    }
  }

  const lists2 = lists.map(list => {
    return {
      ...list,
      tasks: db.tasks.filter(task => task.listId === list.id)
    }
  })

  return (
    <div className="app">
      <SideBar 
        navList={lists}
        colors={db.colors}
        onRemove={removeListItem}
        onAdd={addListItem}
        activeListItem={Number(activeListItem)}
      />
      <div className="main">
        <Route exact path="/">
          {
            lists2.map(list => {
              return <Todo list={list} key={list.id} />
            })
          }
        </Route>
        <Route path="/list/:id">
          <Todo
            list={lists2.find(list => list.id === Number(activeListItem))}
          />
        </Route>
      </div>
    </div>
  );
}
