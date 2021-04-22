import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 4rem;
  height: 100%;
`

export const LatestEpisodes = styled.div`
  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    li {
      position: relative;
      padding: 1.25rem;
      display: flex;
      align-items: center;
      background-color: ${({ theme }) => theme.palette.background.paper};
      border: 1px solid ${({ theme }) => theme.palette.divider};
      border-radius: 1.5rem;

      button {
        position: absolute;
        right: 2rem;
        bottom: 2rem;
        width: 2.5rem;
        height: 2.5rem;
        background-color: ${({ theme }) => theme.palette.background.paper};
        border: 1px solid ${({ theme }) => theme.palette.divider};
        border-radius: 0.675rem;
        font-size: 0;
        transition: filter 0.2s;

        img {
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }
`

export const Thumbnail = styled(Image)`
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
`

export const Details = styled.div`
  flex: 1 1 auto;
  margin-left: 1rem;

  a {
    display: block;
    font-family: 'Lexend', Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.grey[800]};
    line-height: 1.4rem;
    transition: text-decoration 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Member = styled.p`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const PublishedAt = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`

export const Duration = styled(PublishedAt)`
  margin-left: 0.5rem;
  padding-left: 0.5rem;
  position: relative;

  &::before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.palette.grey[200]};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
`

export const AllEpisodes = styled.div`
  padding-bottom: 2rem;

  h2 {
    margin-top: 3rem;
    margin-bottom: 1.5rem;
  }

  table {
    width: 100%;

    th,
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    }

    th {
      font: 500 0.75rem 'Lexend', Arial, Helvetica, sans-serif;
      text-transform: uppercase;
      text-align: left;
      color: ${({ theme }) => theme.palette.grey[200]};
    }

    td {
      font-size: 0.875rem;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
      }

      a {
        font: 600 1rem 'Lexend', Arial, Helvetica, sans-serif;
        line-height: 1.4rem;
        color: ${({ theme }) => theme.palette.grey[800]};
        transition: text-decoration 0.2s;

        &:hover {
          text-decoration: underline;
        }
      }

      button {
        width: 2rem;
        height: 2rem;
        background-color: ${({ theme }) => theme.palette.background.paper};
        border: 1px solid ${({ theme }) => theme.palette.divider};
        border-radius: 0.5rem;
        font-size: 0;
        transition: filter 0.2s;

        img {
          width: 1.25rem;
          height: 1.25rem;
        }

        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }
`
