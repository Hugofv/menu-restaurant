import React, { ReactNode } from 'react'
import { Wrapper, WrapperText } from './styles'
import Typography from '../Typography'

interface IListItemText {
  primary: ReactNode
  secondary?: ReactNode
  info: ReactNode
}

const ListItemText: React.FC<IListItemText> = ({
  primary,
  secondary,
  info
}) => {
  return (
    <Wrapper data-testid='WrapperListItemText'>
      <WrapperText>
        <Typography variant='body1'>{primary}</Typography>
        <Typography variant='body2'>{secondary}</Typography>
      </WrapperText>
      <Typography variant='body1'>{info}</Typography>
    </Wrapper>
  )
}

export default ListItemText
