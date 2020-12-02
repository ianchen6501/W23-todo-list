import { useSelector } from 'react-redux'
import { selectTodos, selectVisibility } from '../redux/selectors'

export default function useGetTodos() {
  const todos = useSelector(selectTodos)
  const visibility = useSelector(selectVisibility)

  const getVisibleTodos = (state = todos, action = visibility) => {
    switch(action) {
      case 'showAll' :
        return state

      case 'showActive' :
        return state.filter(todo => todo.status === false)

      case 'showCompleted' :
        return state.filter(todo => todo.status === true)
      
      default : { return state }
    }
  }
  const visibleTodos = getVisibleTodos()

  return {
    visibleTodos
  }
}
