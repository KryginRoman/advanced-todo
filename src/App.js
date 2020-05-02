import React, {useEffect, useReducer} from 'react';
import {Route, useHistory} from 'react-router-dom';

import ContainerSideBar from './components/SideBar/ContainerSideBar';
import ContainerTodo from './components/Todo/ContainerTodo';

import API from './api/api';
import {initialState, appReducer} from './reduces/appReducer';
import Context from './context/context';
import {setLists, setColors ,setActiveList} from './actions/actions';

import './App.scss';

export default () => {
  const history = useHistory();
  const [state, dispatch] = useReducer(appReducer, initialState);
  const {lists, activeListItem} = state;

  useEffect(() => {
    API.getLists()
      .then(({ data }) => {
        dispatch(setLists(data));
      });
    API.getColors()
      .then(({ data }) => {
        dispatch(setColors(data));
      });
  }, []);

  useEffect(()=> {
    const listId = history.location.pathname.split('list/')[1];
    dispatch(setActiveList(Number(listId)));
  }, [history.location.pathname]);

  return (
    <Context.Provider value={{state, dispatch}}>
      <div className="app">
        <ContainerSideBar />
        <div className="main">
          <Route exact path="/">
            {
              lists.map(list => {
                return <ContainerTodo list={list} key={list.id} />
              })
            }
          </Route>
          <Route path="/list/:id">
            <ContainerTodo 
              list={lists.find(list => list.id === activeListItem)}
            />
          </Route>
        </div>
      </div>
    </Context.Provider>
  );
}
