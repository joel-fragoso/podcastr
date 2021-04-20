import styled from 'styled-components'

export const Container = styled.header`
  height: 6.5rem;
  padding: 2rem 4rem;
  background-color: ${({ theme }) => theme.palette.background.paper};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  display: flex;
  align-items: center;
`

export const Typography = styled.p`
  margin-left: 2rem;
  padding: 0.25rem 0 0.25rem 2rem;
  border-left: 1px solid ${({ theme }) => theme.palette.divider};
`

export const CurrentDate = styled.span`
  margin-left: auto;
  text-transform: capitalize;
`
