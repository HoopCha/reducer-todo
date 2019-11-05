  import React, {useState} from 'react';
  import {useInterval} from "../hooks/useInterval"
  import moment from 'moment'

const Card = ({ todo, dispatch }) => {

const [date, setDate] = useState();

useInterval(() => {
    setDate(moment().add(5, 'seconds'));
  }, 5000);

  return (
      <div>
    <div
     className={`card ${todo.completed ? 'completed' : ''}`}
     onClick={() => dispatch({ type: 'TOGGLE_COMPLETED', payload: todo })}>
     <p>{todo.item}</p>
    </div> 
    {todo.completed ? (
     <p> This was completed {todo.completeTime.from(date)}</p>
    ) : (
        <div></div>
    )}
    </div>
  );
};

export default Card;