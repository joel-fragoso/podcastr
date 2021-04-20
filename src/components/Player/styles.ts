import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 26.5rem;
  height: 100%;
  padding: 3rem 4rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.common.white};
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const HeaderText = styled.strong`
  font-family: 'Lexend', Arial, Helvetica, sans-serif;
  font-weight: 600;
`

export const EmptyPlayer = styled.div`
  width: 100%;
  height: 20rem;
  border: 1.5px dashed ${({ theme }) => theme.palette.primary.lighter};
  border-radius: 1.5rem;
  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 4rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const EmptyPlayerText = styled(HeaderText)``

interface IControlButtonsProps {
  empty?: boolean
}

export const Controls = styled.footer<IControlButtonsProps>`
  align-self: stretch;

  ${({ empty }) =>
    empty &&
    css`
      opacity: 0.5;
    `}
`

export const ControlSeeker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`

export const ControlTimer = styled.span`
  display: inline-block;
  width: 4rem;
  text-align: center;
`

export const ControlSlider = styled.div`
  flex: 1 1 auto;
`

export const ControlEmptySlider = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.palette.primary.lighter};
  border-radius: 2px;
`

export const ControlButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;

    &:nth-child(3) {
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      background-color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`
