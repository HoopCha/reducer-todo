import React, {useState} from "react"

const ToDoForm = (props) => {
    const [newTodo, setNewTodo] = useState("")

    const handleChanges = (e) => {
        setNewTodo(e.target.value)
    }

    return (
        <div>
                <input 
                    type="text"
                    name="todo"
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button onClick={() => {
                    props.dispatch({type: "ADD_TODO", payload:newTodo})
                    setNewTodo("")
                }}>Add Todo</button>
            
            <button onClick={()=> props.dispatch({type: "CLEARED"})}>Clear Completed</button>
        </div>
    )
}

export default ToDoForm;