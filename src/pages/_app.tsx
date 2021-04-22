import { FC } from 'react'
import { AppProps } from 'next/app'
import { GlobalStyle } from '../shared/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '../config/theme'
import { PlayerProvider } from '../store/player/PlayerContext'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PlayerProvider>
          <Component {...pageProps} />
        </PlayerProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
