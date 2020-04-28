import React from 'react';

import TodoTitle from './TodoTitle/TodoTitle';
import TodoList from './Todo-list/Todo-list';
import AddForm from './AddTodoForm/AddTodoForm';

import './Todo.scss';

export default ({ list = {}, onAdd, onRemove, onComplete, onEdit }) => {
  const {name, colorName, id, tasks} = list;
  return (
    <div className="todo">
      {
        tasks 
        ? (
            <>
              <div className="todo__title">
                <TodoTitle
                  title={name}
                  color={colorName}
                  idItem={id}
                  onEdit={onEdit}
                />
              </div>
              <div className="todo__list">
                {(tasks.length > 0)
                  ? (
                    <TodoList
                      todos={tasks}
                      onRemove={onRemove}
                      onComplete={onComplete}
                    />
                  )
                  : (
                    null
                  )
                }
              </div>
              <div className="todo__form">
                <AddForm
                  onAdd={onAdd}
                  listId={id}
                />
              </div>
            </>
        )
        : (
          <div className="todo__alert">
            <p>"Задачи отсутствуют"</p>
          </div>
        )
      }
    </div>
  )
}