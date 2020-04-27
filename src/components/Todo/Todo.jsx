import React from 'react';

import TodoTitle from './TodoTitle/TodoTitle';
import TodoList from './Todo-list/Todo-list';
import AddForm from './AddTodoForm/AddTodoForm';

import './Todo.scss';

export default ({ list, onAdd, onRemove, onComplete, onEdit }) => {
  return (
    <>
      {
        list && (
          <div className="todo">   
            <div className="todo__title">
              <TodoTitle
                title={list.name}
                color={list.colorName}
                idItem={list.id}
                onEdit={onEdit}
              />
            </div>
            <div className="todo__list">
              {(list.tasks && list.tasks.length > 0)
                ? <TodoList 
                    todos={list.tasks}
                    onRemove={onRemove}
                    onComplete={onComplete}
                  /> 
                : <p className="todo__list__alert">Задачи отсутствуют</p>}
            </div>
            <div className="todo__form">
              <AddForm
                onAdd={onAdd}
                listId={list.id}
              />
            </div>
          </div>
        )
      }
    </>
  )
}