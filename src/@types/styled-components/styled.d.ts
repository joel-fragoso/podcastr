import 'styled-components'

interface ICommonColors {
  black: string
  white: string
}

interface ITypeText {
  primary: string
  secondary: string
  disabled: string
}

interface ITypeBackground {
  default: string
  paper: string
}

interface IPaletteColors {
  lighter?: string
  light?: string
  main: string
  dark?: string
  contrastText: string
}

type ITypeColors = {
  50?: string
  100?: string
  200?: string
  300?: string
  400?: string
  500?: string
  600?: string
  700?: string
  800?: string
  900?: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      common: ICommonColors
      background: ITypeBackground
      divider: string
      text: ITypeText
      primary: IPaletteColors
      secondary: IPaletteColors
      grey: ITypeColors
    }
  }
}
