import { FC, useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Slider from 'rc-slider'
import PlayingIcon from '../../assets/PlayingIcon'
import { usePlayer } from '../../store/player/PlayerContext'
import 'rc-slider/assets/index.css'
import Button from '../Button'
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
import convertDurationTimeToString from '../../utils/convertDurationTimeToString'

const Player: FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [progress, setProgress] = useState(0)
  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    isLooping,
    isShuffling,
    hasPrevious,
    hasNext,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    onPlayAndPause,
    playPrevious,
    playNext,
    clearPlayerState,
  } = usePlayer()

  const episode = episodeList[currentEpisodeIndex]

  useEffect(() => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, audioRef])

  const setupProgressListener = useCallback(() => {
    audioRef.current.currentTime = 0
    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime))
    })
  }, [audioRef])

  const handleSeek = useCallback(
    (amount: number) => {
      audioRef.current.currentTime = amount
      setProgress(amount)
    },
    [audioRef]
  )

  const handleEnded = useCallback(() => {
    if (hasNext) {
      playNext()
    } else {
      clearPlayerState()
    }
  }, [hasNext, playNext, clearPlayerState])

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
          <ControlTimer>{convertDurationTimeToString(progress)}</ControlTimer>
          <ControlSlider>
            {episode ? (
              <Slider
                max={episode.file.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <ControlEmptySlider />
            )}
          </ControlSlider>
          <ControlTimer>
            {convertDurationTimeToString(episode?.file.duration ?? 0)}
          </ControlTimer>
        </ControlSeeker>
        {episode && (
          <audio
            ref={audioRef}
            src={episode.file.url}
            loop={isLooping}
            autoPlay
            onEnded={handleEnded}
            onPlay={() => onPlayAndPause(true)}
            onPause={() => onPlayAndPause(false)}
            onLoadedMetadata={setupProgressListener}
          />
        )}
        <ControlButtons>
          <Button
            active={isShuffling}
            onClick={toggleShuffle}
            disabled={!episode || episodeList.length === 1}
          >
            <img src="/static/icons/shuffle.svg" alt="Embaralhar" />
          </Button>
          <Button onClick={playPrevious} disabled={!episode || !hasPrevious}>
            <img src="/static/icons/play-previous.svg" alt="Tocar anterior" />
          </Button>
          <Button disabled={!episode} onClick={togglePlay}>
            {isPlaying ? (
              <img src="/static/icons/pause.svg" alt="Pausar" />
            ) : (
              <img src="/static/icons/play.svg" alt="Tocar" />
            )}
          </Button>
          <Button onClick={playNext} disabled={!episode || !hasNext}>
            <img src="/static/icons/play-next.svg" alt="Tocar próximo" />
          </Button>
          <Button active={isLooping} onClick={toggleLoop} disabled={!episode}>
            <img src="/static/icons/repeat.svg" alt="Repitir" />
          </Button>
        </ControlButtons>
      </Controls>
    </Container>
  )
}

export default Player
