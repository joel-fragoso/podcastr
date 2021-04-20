import { DefaultTheme } from 'styled-components'
import common from './colors/common'
import purple from './colors/purple'
import green from './colors/green'
import grey from './colors/grey'

export const theme: DefaultTheme = {
  palette: {
    common: {
      black: common.black,
      white: common.white,
    },
    background: {
      default: grey[50],
      paper: '#ffffff',
    },
    text: {
      primary: grey[500],
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    primary: {
      lighter: purple[300],
      light: purple[400],
      main: purple[500],
      dark: purple[800],
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
    secondary: {
      main: green[500],
      contrastText: 'rgba(255, 255, 255, 0.87)',
    },
    grey,
  },
}
