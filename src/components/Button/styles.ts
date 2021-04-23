import styled, { css } from 'styled-components'
import { IButtonProps } from '.'

export const Container = styled.button<IButtonProps>`
  background: transparent;
  border: 0;
  font-size: 0;
  transition: filter 0.2s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled):hover {
    filter: brightness(0.7);
  }

  ${({ active }) =>
    active &&
    css`
      filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);

      &:not(:disabled):hover {
        filter: brightness(0.6) invert(0.35) sepia(1) saturate(3)
          hue-rotate(100deg);
      }
    `}
`
