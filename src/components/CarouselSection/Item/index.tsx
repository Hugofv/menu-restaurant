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
    const checkSectinIsVisible = () => {
      const sectionElement = document.querySelector(`#${section.name}`)
      const positionSection = sectionElement?.getBoundingClientRect()

      if (
        positionSection &&
        positionSection.top >= 200 &&
        positionSection.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      ) {
        onChangeSection?.(section)
        return
      }
    }

    window.addEventListener('scroll', checkSectinIsVisible)

    return () => window.removeEventListener('scroll', checkSectinIsVisible)
  }, [onChangeSection, section])

  return (
    <AnchorSection
      href={`#${section.name}`}
      onClick={() => onChangeSection?.(section)}
    >
      <WrapperAvatar data-testid={`item-${section.id}`} active={active}>
        <Avatar active={active} image={section?.images?.[0]?.image || ''} />
        <Typography variant='body1'>{section?.name}</Typography>
      </WrapperAvatar>
    </AnchorSection>
  )
}

export default Item
