import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './redux/store'

const primaryTheme = {
  colors: {
    backgroundColor: '#D7CCC8',
    backgroundHoverColor: '#edf0f4',
    fontColor: '#F5F5F5',
    filterFontColor: '#F5F5F5',
    filterFontHoverColor: '#292c2e',
    borderColor: '#FAFAFA'
  },
  fontSizes: {
    huge: '30px',
    large: '26px',
    medium: '20px',
    small: '16px',
    tiny: '14px'
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={primaryTheme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
