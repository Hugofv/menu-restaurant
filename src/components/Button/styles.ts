import styled from 'styled-components'
import { IStyledButton } from './type'

export const StyledButton = styled.button<IStyledButton>`
  background-color: ${({ theme, color }) => theme.color?.[color || 'primary']};
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0.9rem;
  width: 100%;
  border-radius: 20px;

  &:hover {
    background-color: ${({ theme }) => theme.color?.primaryHover};
  }
`
