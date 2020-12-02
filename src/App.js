import React from 'react'
import './App.css';
import styled from 'styled-components'
import GlobalStyle from './components/globalStyle'
import Todos from './components/Todos'
import Filter from './components/Filter'
import Input from './components/Input'
import useSetLocalStorage from './hooks/useSetLocalStorage'

const Container = styled.div `
  position : relative;
  width: 40vw;
  margin: 50px auto 0px auto;
  box-shadow: 0px 0px 2px gray;
`

function App() {
  useSetLocalStorage()

  return (
    <>
      <GlobalStyle />
      <Container >
        <Input />
        <Filter />
        <Todos />
      </Container>
    </>
  );
}

export default App;
