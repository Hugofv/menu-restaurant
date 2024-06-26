import styled from 'styled-components'
import { ThemeColors } from '~/styles/Theme/type'

export const Wrapper = styled.div`
  display: flex;
`

interface IRoundedButton {
  color?: keyof ThemeColors
  size?: string
}

export const RoundedButton = styled.button<IRoundedButton>`
  background-color: ${({ theme, disabled, color }) =>
    disabled ? theme.color.secondary : theme.color?.[color || 'primary']};
  cursor: pointer;
  border: none;
  outline: none;
  width: ${({ size }) => size || '2rem'};
  height: ${({ size }) => size || '2rem'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
