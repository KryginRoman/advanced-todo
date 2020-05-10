import React, { useContext } from 'react'

import Todo from './Todo';

import API from '../../api/api';
import Context from '../../context/context';
import {
  addTodoItem,
  removeTodoItem,
  editListTitle,
  toggleCompleteTodoItem
} from '../../actions/actions';

export default ({ list }) => {
  const {dispatch} = useContext(Context);
  
  const onAddHandler = (listId, text) => {
    API.addTodoItem(listId, text)
      .then(({ data }) => {
        dispatch(addTodoItem(listId, data))
      })
      .catch(() => {
        alert('Ошибка при добавлении задачи!');
      })
  }
  const onRemoveHandler = (id, listId) => {
    API.removeTodoItem(id)
      .catch(() => {
        alert('Не удалось удалить задачу');
      });
    dispatch(removeTodoItem(id, listId))
  }
  const onToggleCompleteHandler = (id, listId, completed) => {
    API.updateTodoItem(id, {completed})
      .catch(() => {
        alert('Не удалось обновить задачу');
      });
    dispatch(toggleCompleteTodoItem(id, listId))
  }
  const onEditHandler = (id, title) => {
    API.updateListsItem(id, {name: title})
      .catch(() => {
        alert('Не удалось обновить задачу');
      });
    dispatch(editListTitle(id, title))
  }
  return (
    <Todo
      list={list}
      onAdd={onAddHandler}
      onRemove={onRemoveHandler}
      onComplete={onToggleCompleteHandler}
      onEdit={onEditHandler}
    />
  )
}
