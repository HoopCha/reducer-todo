  import React from 'react';

const Card = ({ todo, dispatch }) => {
    console.log(todo)
  return (
    <div
     className={`card ${todo.completed ? 'completed' : ''}`}
     onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo })}>
     <p>{todo.item}</p>
    </div>
   
  );
};

export default Card;