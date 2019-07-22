const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'SORTING':     
      const todoIndex = state.findIndex(todo => todo.completed);
      const todoState = state.slice(0);
      if((action.key === 1) && (todoIndex > 0)){
         [todoState[todoIndex], todoState[todoIndex-1]] = [todoState[todoIndex-1], todoState[todoIndex]];
      } else if((action.key === -1) && (todoIndex < todoState.length -1)) {
         [todoState[todoIndex], todoState[todoIndex+1]] = [todoState[todoIndex+1], todoState[todoIndex]];
      }
     
      return todoState;
    default:
      return state
  }
}

export default todos
