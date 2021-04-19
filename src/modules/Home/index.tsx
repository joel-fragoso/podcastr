import { FC } from 'react'
import Layout from '../../components/Layout'
import Head from '../../shared/Head'
import { Container, HelloWorld } from './styles'

const Home: FC = () => {
  return (
    <>
      <Head title="PodCastr" />
      <Layout>
        <Container>
          <HelloWorld>Olá mundo 🎉️!</HelloWorld>
        </Container>
      </Layout>
    </>
  )
}

export default Home
