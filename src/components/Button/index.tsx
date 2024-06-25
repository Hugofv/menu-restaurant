import React from 'react'
import { StyledButton } from './styles'
import { IButton } from './type'
import Typography from '../Typography'

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Typography variant='h3' color='light'>
        {children}
      </Typography>
    </StyledButton>
  )
}

export default Button
