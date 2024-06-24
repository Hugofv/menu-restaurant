import React from 'react'
import { Container } from './styles'
import Item from './Item'
import { Section } from '~/models/menu'

interface ICarouselSectionProps {
  sections: Section[]
}

const CarouselSection: React.FC<ICarouselSectionProps> = ({ sections }) => {
  return (
    <Container>
      {sections?.map((sec) => <Item section={sec} key={sec.id} />)}
    </Container>
  )
}

export default CarouselSection
