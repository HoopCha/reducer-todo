import React, {useReducer} from 'react';
import './App.css';
import { reducer, initialState } from './reducers/ToDoReducer';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <ToDoForm state={state} dispatch={dispatch}/>
      <ToDoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
