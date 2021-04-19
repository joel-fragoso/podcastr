import { FC } from 'react'
import { AppProps } from 'next/app'
import { GlobalStyle } from '../shared/GlobalStyle'

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
