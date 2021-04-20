import { FC } from 'react'
import { GetStaticProps } from 'next'
import Home from '../modules/Home'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3334/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}

const HomeRoute: FC = (props) => {
  return <Home {...props} />
}

export default HomeRoute
