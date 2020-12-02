import { LOAD_TODOS, ADD_TODO, DELETE_TODO, TOGGLE_STATUS, UPDATE_TODO } from '../actionTypes'

const initialstate = {
  todos : []
}

export default function todosReducer(state = initialstate, action) {
  switch(action.type) {
    case LOAD_TODOS :
      return {
        ...state,
        todos : action.payload.todos
      }
    
    case ADD_TODO :
      return {
        ...state, 
        todos: [...state.todos,{
          id: state.todos.length === 0 ? 0 : state.todos[state.todos.length - 1].id + 1,
          name: action.payload.name,
          status: false
        }]
      }
    
    case DELETE_TODO :
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }

    case UPDATE_TODO :
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if(todo.id === action.payload.id) {
            return {
              ...todo,
              name : action.payload.value
            }
          }
          return todo
        })
      }
    
    case TOGGLE_STATUS :
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if(todo.id === action.payload.id){
            return {
            ...todo,
              status : !todo.status
            }
          }
          return todo
        })
      }
    
    default : { return state }
  }
}