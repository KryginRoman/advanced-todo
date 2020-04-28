import React, {useState, useEffect } from 'react';
import {Route, useHistory} from 'react-router-dom';

import SideBar from './components/SideBar/SideBar';
import Todo from './components/Todo/Todo';

import db from './db/db.json';

import './App.scss';

export default () => {
  const history = useHistory();
  const [lists, setLists] = useState(db.lists);
  const [tasks, setTasks] = useState(db.tasks);
  const [activeListItem, setActiveListItem] = useState(null);

  useEffect(()=> {
    const listId = history.location.pathname.split('list/')[1];
    setActiveListItem(Number(listId));
  }, [lists, history.location.pathname]);

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
      completed: false,
      id: tasks.length + 1
    }
    const newList = [...tasks, todo]

    setTasks(newList)
  }
  const removeTodoItem = id => {
    const newList = tasks.filter(task => task.id !== id)
    setTasks(newList);
  }
  const toggleCompleteTodoItem = id => {
    const newList = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task
    })
    setTasks(newList);
  }
  const editListTitle = (id, newTitle) => {
    const newList = lists.map(list => {
      if (list.id === id) {
        return {
          ...list,
          name: newTitle
        }
      }
      return list
    })
    setLists(newList);
  }

  const lists2 = lists.map(list => {//This is a temporary solution, data must be received from the server in the hook useEffect
    return {
      ...list,
      tasks: tasks.filter(task => task.listId === list.id),
      colorName: db.colors.find(color => color.id === list.colorId).name
    }
  })

  return (
    <div className="app">
      <SideBar 
        navList={lists2}
        colors={db.colors}
        onRemove={removeListItem}
        onAdd={addListItem}
        activeListItem={Number(activeListItem)}
      />
      <div className="main">
        <Route exact path="/">
          {
            lists2.map(list => {
              return <Todo 
                      list={list} 
                      key={list.id}
                      onAdd={addTodoItem}
                      onRemove={removeTodoItem}
                      onComplete={toggleCompleteTodoItem}
                      onEdit={editListTitle}
                     />
            })
          }
        </Route>
        <Route path="/list/:id">
          <Todo
            list={lists2.find(list => list.id === activeListItem)}
            onAdd={addTodoItem}
            onRemove={removeTodoItem}
            onComplete={toggleCompleteTodoItem}
            onEdit={editListTitle}
          />
        </Route>
      </div>
    </div>
  );
}
