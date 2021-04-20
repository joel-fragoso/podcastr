import { FC } from 'react'
import Layout from '../../components/Layout'
import Head from '../../shared/Head'
import { Container, HelloWorld } from './styles'

const Home: FC = (props) => {
  return (
    <>
      <Head title="Podcastr" />
      <Layout>
        <Container>
          <HelloWorld>Olá mundo 🎉️!</HelloWorld>
          <p>{JSON.stringify(props)}</p>
        </Container>
      </Layout>
    </>
  )
}

export default Home
