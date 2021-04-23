import { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from 'react'
import { Container } from './styles'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  active?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button: FC<IButtonProps> = ({
  children,
  active = false,
  disabled = false,
  onClick,
}: IButtonProps) => {
  return (
    <Container
      type="button"
      active={active}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Container>
  )
}

export default Button
