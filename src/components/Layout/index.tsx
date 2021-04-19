import { FC, ReactNode } from 'react'
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
        <LayoutContainer>
          <LayoutContent>{children}</LayoutContent>
        </LayoutContainer>
      </LayoutWrapper>
    </LayoutRoot>
  )
}

export default Layout
