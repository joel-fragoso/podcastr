import { FC } from 'react'
import { GetStaticProps } from 'next'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import api from '../services/api'
import Home from '../modules/Home'
import convertDurationTimeToString from '../utils/convertDurationTimeToString'

interface IFile {
  url: string
  type: string
  duration: number
}

interface IEpisode {
  id: string
  title: string
  members: string
  published_at: string
  thumbnail: string
  description: string
  file: IFile
  publishedAt: string
  durationAsString: string
}

interface IHomeRouteProps {
  latestEpisodes: IEpisode[]
  allEpisodes: IEpisode[]
}

const HomeRoute: FC<IHomeRouteProps> = (props) => {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get<IEpisode[]>('/episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc',
    },
  })

  const episodes = data.map((episode: IEpisode) => {
    return {
      ...episode,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', {
        locale: ptBR,
      }),
      durationAsString: convertDurationTimeToString(
        Number(episode.file.duration)
      ),
    }
  })

  const latestEpisodes = episodes.slice(0, 2)
  const allEpisodes = episodes.slice(2, episodes.length)

  return {
    props: {
      latestEpisodes,
      allEpisodes,
    },
    revalidate: 60 * 60 * 8,
  }
}

export default HomeRoute
