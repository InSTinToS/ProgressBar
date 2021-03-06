import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;

    body {
      font-size: 1.6rem;
    }
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  input[type="checkbox"] {
    &, &:focus, &:hover {
      box-shadow: initial;
    }
  }
`
