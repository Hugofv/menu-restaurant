import React, { useEffect } from 'react'
import { AnchorSection, Avatar, WrapperAvatar } from './styles'
import Typography from '~/components/Typography'
import { Section } from '~/models/menu'

interface IItemProps {
  active?: boolean
  section: Section
  onChangeSection?: (section: Section) => void
}

const Item: React.FC<IItemProps> = ({ active, section, onChangeSection }) => {
  useEffect(() => {
    const parentSection = document.querySelector('#WrapperSection')
    const checkSectinIsVisible = () => {
      const sectionElement = document.querySelector(`#${section.name}`)
      const positionSection = sectionElement?.getBoundingClientRect()
      const containerRect = parentSection?.getBoundingClientRect()

      if (
        positionSection &&
        containerRect &&
        positionSection.top >= containerRect.top &&
        positionSection.bottom <= containerRect.bottom
      ) {
        onChangeSection?.(section)
        return
      }
    }

    if (parentSection) {
      parentSection.addEventListener('scroll', checkSectinIsVisible)

      return () =>
        parentSection.removeEventListener('scroll', checkSectinIsVisible)
    }
  }, [onChangeSection, section])

  return (
    <AnchorSection
      href={`#${section.name}`}
      onClick={() => onChangeSection?.(section)}
    >
      <WrapperAvatar active={active}>
        <Avatar active={active} image={section?.images?.[0]?.image || ''} />
        <Typography variant='body1'>{section?.name}</Typography>
      </WrapperAvatar>
    </AnchorSection>
  )
}

export default Item
