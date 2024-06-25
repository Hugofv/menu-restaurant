import React, { ChangeEvent, ReactNode } from 'react'
import { StyledRadio, Wrapper, WrapperText } from './styles'
import Typography from '../Typography'

interface IListItemOption {
  primary: ReactNode
  secondary?: ReactNode
  checked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const ListItemOption: React.FC<IListItemOption> = ({
  checked,
  primary,
  secondary,
  onChange
}) => {
  return (
    <Wrapper>
      <WrapperText>
        <Typography variant='body1'>{primary}</Typography>
        <Typography variant='body2'>{secondary}</Typography>
      </WrapperText>
      <StyledRadio checked={checked} onChange={onChange} type='checkbox' />
    </Wrapper>
  )
}

export default ListItemOption
