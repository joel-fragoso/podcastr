import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Head from '../../shared/Head'
import {
  Container,
  LatestEpisodes,
  Thumbnail,
  Details,
  Member,
  PublishedAt,
  Duration,
  AllEpisodes,
} from './styles'
import { usePlayer } from '../../store/player/PlayerContext'

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
  file: IFile
  publishedAt: string
  durationAsString: string
}

interface IHomeProps {
  latestEpisodes: IEpisode[]
  allEpisodes: IEpisode[]
}

const Home: FC<IHomeProps> = ({ latestEpisodes, allEpisodes }) => {
  const { play } = usePlayer()

  return (
    <>
      <Head title="Podcastr - O melhor para você ouvir, sempre" />
      <Layout>
        <Container>
          <LatestEpisodes>
            <h2>Últimos lançamentos</h2>
            <ul>
              {latestEpisodes.map((episode) => (
                <li key={episode.id}>
                  <Thumbnail
                    width={192}
                    height={192}
                    src={episode.thumbnail}
                    alt={episode.title}
                    objectFit={'cover'}
                  />
                  <Details>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                    <Member>{episode.members}</Member>
                    <PublishedAt>{episode.publishedAt}</PublishedAt>
                    <Duration>{episode.durationAsString}</Duration>
                  </Details>
                  <button onClick={() => play(episode)}>
                    <img
                      src="/static/icons/play-green.svg"
                      alt="Tocar episódio"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </LatestEpisodes>
          <AllEpisodes>
            <h2>Todos os episódios</h2>
            <table cellSpacing={0}>
              <thead>
                <tr>
                  <th></th>
                  <th>Podcast</th>
                  <th>Integrantes</th>
                  <th>Data</th>
                  <th>Duração</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allEpisodes.map((episode) => (
                  <tr key={episode.id}>
                    <td>
                      <Image
                        width={120}
                        height={120}
                        src={episode.thumbnail}
                        alt={episode.title}
                      />
                    </td>
                    <td>
                      <Link href={`/episodes/${episode.id}`}>
                        <a>{episode.title}</a>
                      </Link>
                    </td>
                    <td>{episode.members}</td>
                    <td>{episode.publishedAt}</td>
                    <td>{episode.durationAsString}</td>
                    <td>
                      <button onClick={() => play(episode)}>
                        <img
                          src="/static/icons/play-green.svg"
                          alt="Tocar episódio"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AllEpisodes>
        </Container>
      </Layout>
    </>
  )
}

export default Home
