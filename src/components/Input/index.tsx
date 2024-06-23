import React, { ReactNode } from 'react'
import { StyledInput, Wrapper } from './style'

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: ReactNode
}

const Input: React.FC<IInputProps> = ({ startIcon, ...props }) => {
  return (
    <Wrapper>
      {startIcon && startIcon}
      <StyledInput {...props} />
    </Wrapper>
  )
}

export default Input
