import { FC, ReactNode } from 'react'
import Navbar from '../Navbar'
import Player from '../Player'
import {
  LayoutRoot,
  LayoutWrapper,
  LayoutContainer,
  LayoutContent,
} from './styles'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC = ({ children }: ILayoutProps) => {
  return (
    <LayoutRoot>
      <LayoutWrapper>
        <Navbar />
        <LayoutContainer>
          <LayoutContent>{children}</LayoutContent>
        </LayoutContainer>
      </LayoutWrapper>
      <Player />
    </LayoutRoot>
  )
}

export default Layout
