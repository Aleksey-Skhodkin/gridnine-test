import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-blue: rgb(0, 135, 201);
    --color-orange: rgb(255, 177, 104);
    --color-grey: grey;
    --color-disabled: lightgrey;
    --font-color-white: white;
    --font-color-black: rgb(51, 51, 51);
    --font-color-blue:rgb(0, 135, 201);
  }

  * {
    margin: 0;
    padding: 0;
  }

  body, button {
    color: var(--font-color-black);
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

