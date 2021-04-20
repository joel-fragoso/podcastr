import { FC } from 'react'
import PlayingIcon from '../../assets/PlayingIcon'
import {
  Container,
  Header,
  HeaderText,
  EmptyPlayer,
  EmptyPlayerText,
  Controls,
  ControlSeeker,
  ControlTimer,
  ControlSlider,
  ControlEmptySlider,
  ControlButtons,
} from './styles'

const Player: FC = () => {
  return (
    <Container>
      <Header>
        <PlayingIcon />
        <HeaderText>Tocando agora</HeaderText>
      </Header>
      <EmptyPlayer>
        <EmptyPlayerText>Selecione um podcast para ouvir</EmptyPlayerText>
      </EmptyPlayer>
      <Controls empty>
        <ControlSeeker>
          <ControlTimer>00:00</ControlTimer>
          <ControlSlider>
            <ControlEmptySlider />
          </ControlSlider>
          <ControlTimer>00:00</ControlTimer>
        </ControlSeeker>
        <ControlButtons>
          <button>
            <img src="/static/icons/shuffle.svg" alt="Embaralhar" />
          </button>
          <button>
            <img src="/static/icons/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button>
            <img src="/static/icons/play.svg" alt="Tocar" />
          </button>
          <button>
            <img src="/static/icons/play-next.svg" alt="Tocar próximo" />
          </button>
          <button>
            <img src="/static/icons/repeat.svg" alt="Repitir" />
          </button>
        </ControlButtons>
      </Controls>
    </Container>
  )
}

export default Player
