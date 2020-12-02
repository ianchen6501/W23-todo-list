import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleStatus, updateTodo } from '../redux/actions'
import useGetTodos from '../hooks/useGetTodos'

const TodoInput = styled.input `
  background: ${props => props.theme.colors.backgroundColor};
  outline: none;
  border: none;
  font-size: ${props => props.theme.fontSizes.medium};
  margin-left: 20px;
  text-decoration: ${props => props.status ? 'line-through' : 'none'};
  &:focus {
    border: none;
    outline: none;
  }
`

const TodoCheckbox = styled.input `
  vertical-align: bottom;
  width: 20px;
  height: 20px;
  border: 0.2px solid ${props => props.theme.colors.borderColor};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
`

const TodosContainer = styled.ul `
  width: 100%;
  padding: 0px;
  margin: 0px;
`

const Todo = styled.li `
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-top: solid 0.5px ${props => props.theme.colors.borderColor}; 
  padding-left: 20px;
  background: ${props => props.theme.colors.backgroundColor};
`

const Button = styled.button `
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${props => props.theme.colors.backgroundHoverColor}
  }

  &:focus {
    outline: none;
  }
`

export default function Todos() {
  const dispatch = useDispatch()
  const { visibleTodos } = useGetTodos()

  return (
    <TodosContainer>
      {visibleTodos.map(todo => (
        <Todo key={todo.id}>
          <div>
            <TodoCheckbox checked={todo.status} type='checkbox' onClick={() => {dispatch(toggleStatus(todo.id))}}/>
            <TodoInput status={todo.status} value={todo.name} onChange={(event) => dispatch(updateTodo(todo.id, event.target.value))}></TodoInput>
          </div>
          <div>
            <Button onClick={() => {dispatch(deleteTodo(todo.id))}}>delete</Button>
          </div>
        </Todo>
      ))}
    </TodosContainer>
  );
}
