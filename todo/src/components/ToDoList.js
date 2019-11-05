import React from 'react';
import Card from './ToDoCard';

const ToDoList = ({ state, dispatch }) => {
  return (
    <div>
      <h2>List of Todos</h2>
      <div>
        {state.toDos.map(todo => (
          <Card key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;