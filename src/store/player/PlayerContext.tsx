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
  play: (episode: IEpisode) => void
  togglePlay: () => void
  onPlayAndPause: (playing: boolean) => void
}

interface IPlayerProviderProps {
  children: ReactNode
}

const PlayerContext = createContext({} as IPlayerContextProps)

export const PlayerProvider: FC<IPlayerProviderProps> = ({ children }) => {
  const [episodeList, setEpisodeList] = useState<IEpisode[]>([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = useCallback((episode: IEpisode) => {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setIsPlaying(true)
  }, [])

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const onPlayAndPause = useCallback((playing: boolean) => {
    setIsPlaying(playing)
  }, [])

  return (
    <PlayerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        isPlaying,
        play,
        togglePlay,
        onPlayAndPause,
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
