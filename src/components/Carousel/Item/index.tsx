import React from 'react'
import { Avatar, WrapperAvatar } from './styles'
import Typography from '~/components/Typography'

interface IItemProps {
  active?: boolean
}

const Item: React.FC<IItemProps> = ({ active }) => {
  return (
    <WrapperAvatar active={active}>
      <Avatar />
      <Typography variant='body1'>sdfsd</Typography>
    </WrapperAvatar>
  )
}

export default Item
