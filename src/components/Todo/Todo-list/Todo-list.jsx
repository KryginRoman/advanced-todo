import React from 'react';

import TodoItem from './Todo-item/Todo-item';

import './Todo-list.scss';

export default ({ todos }) => {
  return (
    <ul className="todo-list">
      {
        todos.map(({ text ,completed, id }) => {
          return <TodoItem
                    text={text}
                    completed={completed}
                    key={id}
                 />
        })
      }
    </ul>
  )
}