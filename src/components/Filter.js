import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { selectVisibility } from '../redux/selectors'
import { setVisibility } from '../redux/actions';

const FilterContainer = styled.div `
  width: 100%;
  background: ${props => props.theme.colors.backgroundColor};
`

const FilterButton = styled.button `
  font-family: '微軟正黑體', Arial, sans-serif;
  font-weight: bold;
  padding: 10px 20px;
  font-size: ${props => props.theme.fontSizes.small};
  cursor: pointer;
  color: ${props => props.theme.colors.filterFontColor};
  transition: 0.5s;

  &:hover {
    background: ${props => props.theme.colors.backgroundHoverColor};
    color: ${props => props.theme.colors.filterFontHoverColor};
  }

  &:focus {
    outline: none;
  }

  ${props => props.$active && `
    background : ${props.theme.colors.backgroundHoverColor};
    color: ${props.theme.colors.filterFontHoverColor};
    `}
`

function App() {
  const dispatch = useDispatch()
  const visibility = useSelector(selectVisibility)

  return (
    <FilterContainer>
      <FilterButton $active={visibility === 'showAll'} onClick={() => dispatch(setVisibility('showAll'))}>全部</FilterButton>
      <FilterButton $active={visibility === 'showActive'} onClick={() => dispatch(setVisibility('showActive'))}>未完成</FilterButton>
      <FilterButton $active={visibility === 'showCompleted'} onClick={() => dispatch(setVisibility('showCompleted'))}>完成</FilterButton>
    </FilterContainer>
  );
}

export default App;
