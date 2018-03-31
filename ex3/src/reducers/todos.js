const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return {
        ...state,
        todos: action.todos
      };
    // TODO 1
    default:
      return state
  }
}

const defaultState = {
  todos: [],
  //filter: false TODO
}

export default todos