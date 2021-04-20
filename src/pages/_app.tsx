import { FC } from 'react'
import { AppProps } from 'next/app'
import { GlobalStyle } from '../shared/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
