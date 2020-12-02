import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTodos } from '../redux/selectors'
import { loadTodos } from '../redux/actions';

export default function useSetLocalStorage() {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem('todos'))
    if(storageTodos.length !== 0) {
      dispatch(loadTodos(storageTodos))
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(todos)
    localStorage.setItem('todos', json)
  }, [todos])

  return;
} 
