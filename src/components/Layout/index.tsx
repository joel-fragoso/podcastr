import { FC, ReactNode } from 'react'
import Navbar from '../Navbar'
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
      <Navbar />
      <LayoutWrapper>
        <LayoutContainer>
          <LayoutContent>{children}</LayoutContent>
        </LayoutContainer>
      </LayoutWrapper>
    </LayoutRoot>
  )
}

export default Layout
