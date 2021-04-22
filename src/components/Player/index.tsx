import { FC, useEffect, useRef } from 'react'
import Image from 'next/image'
import Slider from 'rc-slider'
import PlayingIcon from '../../assets/PlayingIcon'
import { usePlayer } from '../../store/player/PlayerContext'
import 'rc-slider/assets/index.css'
import {
  Container,
  Header,
  HeaderText,
  Playing,
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
  const audioRef = useRef<HTMLAudioElement>(null)
  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    onPlayAndPause,
  } = usePlayer()

  const episode = episodeList[currentEpisodeIndex]

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying])

  return (
    <Container>
      <Header>
        <PlayingIcon />
        <HeaderText>Tocando agora</HeaderText>
      </Header>
      {episode ? (
        <Playing>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            alt={episode.title}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </Playing>
      ) : (
        <EmptyPlayer>
          <EmptyPlayerText>Selecione um podcast para ouvir</EmptyPlayerText>
        </EmptyPlayer>
      )}
      <Controls empty={!episode}>
        <ControlSeeker>
          <ControlTimer>00:00</ControlTimer>
          <ControlSlider>
            {episode ? (
              <Slider
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <ControlEmptySlider />
            )}
          </ControlSlider>
          <ControlTimer>00:00</ControlTimer>
        </ControlSeeker>
        {episode && (
          <audio
            ref={audioRef}
            src={episode.file.url}
            autoPlay
            onPlay={() => onPlayAndPause(true)}
            onPause={() => onPlayAndPause(false)}
          />
        )}
        <ControlButtons>
          <button type="button" disabled={!episode}>
            <img src="/static/icons/shuffle.svg" alt="Embaralhar" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/static/icons/play-previous.svg" alt="Tocar anterior" />
          </button>
          <button type="button" disabled={!episode} onClick={togglePlay}>
            {isPlaying ? (
              <img src="/static/icons/pause.svg" alt="Pausar" />
            ) : (
              <img src="/static/icons/play.svg" alt="Tocar" />
            )}
          </button>
          <button type="button" disabled={!episode}>
            <img src="/static/icons/play-next.svg" alt="Tocar próximo" />
          </button>
          <button type="button" disabled={!episode}>
            <img src="/static/icons/repeat.svg" alt="Repitir" />
          </button>
        </ControlButtons>
      </Controls>
    </Container>
  )
}

export default Player
