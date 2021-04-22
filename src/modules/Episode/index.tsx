import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { Container, Thumbnail, Description } from './styles'

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

interface IEpisodeProps {
  episode: IEpisode
}

const Episode: FC<IEpisodeProps> = ({ episode }) => {
  return (
    <Layout>
      <Container>
        <Thumbnail>
          <Link href="/">
            <button>
              <img src="/static/icons/arrow-left.svg" alt="Voltar" />
            </button>
          </Link>
          <Image
            width={700}
            height={160}
            src={episode.thumbnail}
            alt={episode.title}
            objectFit={'cover'}
          />
          <button>
            <img src="/static/icons/play.svg" alt="Tocar episódio" />
          </button>
        </Thumbnail>
        <header>
          <h1>{episode.title}</h1>
          <span>{episode.members}</span>
          <span>{episode.publishedAt}</span>
          <span>{episode.durationAsString}</span>
        </header>
        <Description
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      </Container>
    </Layout>
  )
}

export default Episode
