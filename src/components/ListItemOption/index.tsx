import React, { ReactNode } from 'react'
import { StyledRadio, Wrapper, WrapperText } from './styles'
import Typography from '../Typography'

interface IListItemOption {
  primary: ReactNode
  secondary: ReactNode
}

const ListItemOption: React.FC<IListItemOption> = ({ primary, secondary }) => {
  return (
    <Wrapper>
      <WrapperText>
        <Typography variant='body1'>{primary}</Typography>
        <Typography variant='body2'>{secondary}</Typography>
      </WrapperText>
      <StyledRadio type='radio' />
    </Wrapper>
  )
}

export default ListItemOption
