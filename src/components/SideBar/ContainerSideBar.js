import React, {useContext} from 'react'

import SideBar from './SideBar';

import API from '../../api/api';
import Context from '../../context/context';
import {setLists} from '../../actions/actions';

export default () => {
  const {state, dispatch} = useContext(Context);
  const {lists, colors, activeListItem} = state;

  const onAddHandler = (name, colorId) => {
    API.addListsItem(name, colorId)
      .then(() => API.getLists())
      .then(({ data }) => {
        dispatch(setLists(data));
      });
  }
  const onRemoveHandler = id => {
    API.removeListsItem(id)
      .then(() => API.getLists())
      .then(({ data }) => {
        dispatch(setLists(data));
      });
  }

  return (
    <SideBar
      lists={lists}
      colors={colors}
      activeListItem={activeListItem}
      onAddList={onAddHandler}
      onRemoveList={onRemoveHandler}
    />
  )
}
