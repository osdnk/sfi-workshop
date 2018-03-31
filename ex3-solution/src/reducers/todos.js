const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.todos
      };
    case 'TOGGLE_FILTER':
      return {
        ...state,
        filter: !state.filter
      };
    default:
      return state
  }
}

const defaultState = {
  todos: [],
  filter: false
}

export default todos