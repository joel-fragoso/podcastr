import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import api from '../../services/api'
import { format, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import convertDurationTimeToString from '../../utils/convertDurationTimeToString'
import Episode from '../../modules/Episode'

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

interface IEpisodesRouteProps {
  episode: IEpisode
}

const EpisodesRoute: FC<IEpisodesRouteProps> = (props) => {
  return <Episode {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params

  const { data } = await api.get<IEpisode>(`/episodes/${slug}`)

  const episode = {
    id: data.id,
    title: data.title,
    members: data.members,
    published_at: data.published_at,
    thumbnail: data.thumbnail,
    description: data.description,
    file: {
      url: data.file.url,
      type: data.file.type,
      duration: data.file.duration,
    },
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', {
      locale: ptBR,
    }),
    durationAsString: convertDurationTimeToString(Number(data.file.duration)),
  }

  return {
    props: {
      episode,
    },
    revalidate: 60 * 60 * 24,
  }
}

export default EpisodesRoute
