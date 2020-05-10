import React from 'react';

import TodoTitle from './TodoTitle/TodoTitle';
import TodoList from './Todo-list/Todo-list';
import AddForm from './AddTodoForm/AddTodoForm';

import './Todo.scss';

export default ({ list, onAdd, onRemove, onComplete, onEdit }) => {
  return (
    <div className="todo">
      {
        list
          ? (
            <>
              <div className="todo__title">
                <TodoTitle
                  title={list.name}
                  color={list.color.name}
                  idItem={list.id}
                  onEdit={onEdit}
                />
              </div>
              <div className="todo__list">
                {(list.tasks.length > 0)
                  ? (
                    <TodoList
                      todos={list.tasks}
                      listId={list.id}
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
                  listId={list.id}
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