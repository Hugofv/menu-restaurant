import React, { useRef } from 'react'
import { Container } from './styles'
import Item from './Item'
import { Section } from '~/models/menu'

interface ICarouselSectionProps {
  sections: Section[]
  selected?: Section
  onChangeSection?: (section: Section) => void
}

const CarouselSection: React.FC<ICarouselSectionProps> = ({
  sections,
  selected,
  onChangeSection
}) => {
  const currentSectionRef = useRef(selected)

  const handleChangeSection = (section: Section) => {
    if (currentSectionRef.current?.id !== section.id) {
      currentSectionRef.current = section
      onChangeSection?.(section)
    }
  }

  return (
    <Container>
      {sections?.map((sec) => (
        <Item
          key={sec.id}
          active={selected?.id === sec?.id}
          onChangeSection={handleChangeSection}
          section={sec}
        />
      ))}
    </Container>
  )
}

export default CarouselSection
