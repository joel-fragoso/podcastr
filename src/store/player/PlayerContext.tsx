import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react'

interface IFile {
  url: string
  duration: number
}

interface IEpisode {
  title: string
  members: string
  thumbnail: string
  file: IFile
}

interface IPlayerContextProps {
  episodeList: IEpisode[]
  currentEpisodeIndex: number
  isPlaying: boolean
  isLooping: boolean
  isShuffling: boolean
  hasPrevious: boolean
  hasNext: boolean
  play: (episode: IEpisode) => void
  playList: (list: IEpisode[], index: number) => void
  playPrevious: () => void
  playNext: () => void
  togglePlay: () => void
  toggleLoop: () => void
  toggleShuffle: () => void
  onPlayAndPause: (playing: boolean) => void
  clearPlayerState: () => void
}

interface IPlayerProviderProps {
  children: ReactNode
}

const PlayerContext = createContext({} as IPlayerContextProps)

export const PlayerProvider: FC<IPlayerProviderProps> = ({
  children,
}: IPlayerProviderProps) => {
  const [episodeList, setEpisodeList] = useState<IEpisode[]>([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLooping, setIsLooping] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)

  const play = useCallback((episode: IEpisode) => {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }, [])

  const playList = useCallback((list: IEpisode[], index: number) => {
    setEpisodeList(list)
    setCurrentEpisodeIndex(index)
    setIsPlaying(true)
  }, [])

  const hasPrevious = currentEpisodeIndex - 1 >= 0
  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length

  const playPrevious = useCallback(() => {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1)
    }
  }, [currentEpisodeIndex])

  const playNext = useCallback(() => {
    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(
        Math.random() * episodeList.length
      )
      setCurrentEpisodeIndex(nextRandomEpisodeIndex)
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1)
    }
  }, [currentEpisodeIndex])

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const toggleLoop = useCallback(() => {
    setIsLooping(!isLooping)
  }, [isLooping])

  const toggleShuffle = useCallback(() => {
    setIsShuffling(!isShuffling)
  }, [isShuffling])

  const onPlayAndPause = useCallback((playing: boolean) => {
    setIsPlaying(playing)
  }, [])

  const clearPlayerState = useCallback(() => {
    setEpisodeList([])
    setCurrentEpisodeIndex(0)
  }, [])

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        isLooping,
        isShuffling,
        hasPrevious,
        hasNext,
        play,
        playList,
        playPrevious,
        playNext,
        togglePlay,
        toggleLoop,
        toggleShuffle,
        onPlayAndPause,
        clearPlayerState,
      }}
    >
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = (): IPlayerContextProps => {
  const context = useContext(PlayerContext)

  if (!context) {
    throw new Error('usePlayer must be within PlayerProvider')
  }

  return context
}
