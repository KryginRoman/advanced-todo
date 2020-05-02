import React from 'react';

import TodoItem from './Todo-item/Todo-item';

import './Todo-list.scss';

export default ({ todos, listId, onRemove, onComplete }) => {
  return (
    <ul className="todo-list">
      {
        todos.map(({ text ,completed, id }) => {
          return <TodoItem
                    text={text}
                    onRemove={() => onRemove(id, listId)}
                    onComplete={() => onComplete(id, listId, !completed)}
                    completed={completed}
                    key={id}
                 />
        })
      }
    </ul>
  )
}