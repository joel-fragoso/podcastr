import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *, ::before, ::after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background-color: #fafafa;
    color: #212121;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  body, button, input, textarea {
    font: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
