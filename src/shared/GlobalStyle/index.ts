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

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: #f7f8fa;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
  }

  body, button, input, textarea {
    font: 500 1rem 'Inter', Arial, Helvetica, sans-serif;
    color: #808080;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lexend', Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: #494d4b;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
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
