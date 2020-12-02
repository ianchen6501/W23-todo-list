import styled from 'styled-components'
import useInput from '../hooks/useInput'

const Input = styled.input `
  font-family: '微軟正黑體', Arial, sans-serif;
  width: 100%;
  height: 60px;
  border: solid 0px;
  font-size: ${props => props.theme.fontSizes.huge};
  box-sizing: border-box;
  padding-left: 6px;
  color: ${props => props.theme.colors.filterFontHoverColor};
  
  &:focus {
    border: none;
    outline: none;
    vertical-align: middle;
  }
`

function App() {
  const {    
    value,
    handleOnkeyPress,
    handleInputOnChange
  } = useInput()

  return (
    <>
      <Input placeholder={'來點未完記事'} value={value} onChange={(event) => {handleInputOnChange(event)}} onKeyPress={(event) => handleOnkeyPress(event)}></Input>
    </>
  );
}

export default App;
