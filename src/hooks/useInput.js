import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions';

export default function useInput() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  function handleOnkeyPress(event) {
    if(event.target.value === '') {return}
    if(event.key === 'Enter') {
      dispatch(addTodo(value))
      setValue('')
    }
  }

  function handleInputOnChange (event) {
    setValue(event.target.value)
  }

  return {
    value,
    setValue,
    handleOnkeyPress,
    handleInputOnChange
  }
}
