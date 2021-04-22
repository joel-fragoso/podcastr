import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 45rem;
  padding: 3rem 2rem;

  header {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};

    h1 {
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }

    span {
      display: inline-block;
      font-size: 0.875rem;

      & + span {
        margin-left: 1rem;
        padding-left: 1rem;
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
      }
    }
  }
`

export const Thumbnail = styled.div`
  position: relative;

  img {
    border-radius: 1rem;
  }

  button {
    width: 3rem;
    height: 3rem;
    border: 0;
    border-radius: 0.75rem;
    position: absolute;
    z-index: 5;
    font-size: 0;
    transition: filter 0.2s;

    &:first-child {
      top: 50%;
      left: 0;
      background-color: ${({ theme }) => theme.palette.primary.main};
      transform: translate(-50%, -50%);
    }

    &:last-child {
      top: 50%;
      right: 0;
      background-color: ${({ theme }) => theme.palette.secondary.main};
      transform: translate(50%, -50%);
    }

    &:hover {
      filter: brightness(0.95);
    }
  }
`

export const Description = styled.div`
  margin-top: 2rem;
  line-height: 1.675rem;
  color: ${({ theme }) => theme.palette.grey[800]};

  p {
    margin: 1.5rem 0;
  }
`
