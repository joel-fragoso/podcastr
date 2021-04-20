import { FC } from 'react'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import Logo from '../../assets/Logo'
import { Container, Typography, CurrentDate } from './styles'

const Navbar: FC = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR })

  return (
    <Container>
      <Logo />
      <Typography>O melhor para você ouvir, sempre</Typography>
      <CurrentDate>{currentDate}</CurrentDate>
    </Container>
  )
}

export default Navbar
