export const initialState = {
    toDos: [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    },
    {
    item: 'Add another todo item',
    completed: false,
    id: 3892987529
    }
]}

export const reducer = (state, action) => {
    switch (action.type) {
    case "ADD_TODO":    
    const newTodo = {
        item: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        toDos: [...state.toDos, newTodo]
      };
    case "TOGGLE_COMPLETED":
    return {
    ...state,
    toDos: state.toDos.map(todo => {
        if(todo.id === action.payload.id) {
        return {...todo, completed: !todo.completed}
        } else {
        return todo;
        }
    })
    };
    case "CLEARED":
        return {
            toDos: state.toDos.filter(todo => {
                return todo.completed === false;
            })
            }
    default:
            return state
    }
}