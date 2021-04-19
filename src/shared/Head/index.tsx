import { FC } from 'react'
import NextHead from 'next/head'

interface IHeadProps {
  title: string
}

const Head: FC<IHeadProps> = ({ title }: IHeadProps) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  )
}

export default Head
