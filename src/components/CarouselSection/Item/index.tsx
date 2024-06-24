import React from 'react'
import { Avatar, WrapperAvatar } from './styles'
import Typography from '~/components/Typography'
import { Section } from '~/models/menu'

interface IItemProps {
  active?: boolean
  section: Section
}

const Item: React.FC<IItemProps> = ({ active, section }) => {
  return (
    <WrapperAvatar active={active}>
      <Avatar active={active} image={section?.images?.[0]?.image || ''} />
      <Typography variant='body1'>{section?.name}</Typography>
    </WrapperAvatar>
  )
}

export default Item
