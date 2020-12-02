import { ADD_TODO, DELETE_TODO, TOGGLE_STATUS, UPDATE_TODO, SET_VISIBILITY_FILTER, LOAD_TODOS, GET_VISIBLE_TODOS } from './actionTypes'

export function loadTodos(todos) {
  return {
    type: LOAD_TODOS,
    payload: {
      todos
    }
  }
}

export function addTodo(name) {
  return {
    type: ADD_TODO,
    payload: {
      name
    }
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  }
}

export function updateTodo(id, value) {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      value
    }
  }
}

export function toggleStatus(id) {
  return {
    type: TOGGLE_STATUS,
    payload: {
      id
    }
  }
}

export function setVisibility(visibility) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: {
      visibility
    }
  }
}

