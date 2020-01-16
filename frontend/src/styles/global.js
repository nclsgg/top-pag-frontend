import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export const colors = {
  Orange: '#d97035',
  Grey: '#737fa9',
  Background: '#F5F6FA',
  LightGrey: '#C4C4C4',
  DarkGrey: '#6B6E70',
  DarkBlue: '#253958',
  LightBlue: '#C8EDF9',
  Blue: '#3588C4',
};

export const fonts = {
  Default: '12px',
};

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Ubuntu', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
