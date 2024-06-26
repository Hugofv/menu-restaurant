import React from 'react'
import { StyledButton } from './styles'
import { IButton } from './type'
import Typography from '../Typography'

const Button: React.FC<IButton> = ({ children, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      <Typography variant='h3' color={disabled ? 'primary' : 'light'}>
        {children}
      </Typography>
    </StyledButton>
  )
}

export default Button
