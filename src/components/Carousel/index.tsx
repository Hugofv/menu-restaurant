import React from 'react'
import { Container } from './styles'
import Item from './Item'

const Carousel: React.FC = () => {
  return (
    <Container>
      <Item active />
      <Item />
      <Item />
    </Container>
  )
}

export default Carousel
