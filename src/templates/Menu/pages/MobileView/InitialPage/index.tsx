import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiSearch } from 'react-icons/fi'
import Header from '~/components/Header'
import Input from '~/components/Input'
import { Container, WrapperProducts, WrapperSection } from './styles'
import CarouselSection from '~/components/CarouselSection'
import { useMenuProvider } from '~/templates/Menu/hooks/useMenuProvider'
import Collapse from '~/components/Collapse'
import ListItemProduct from '~/components/ListItemProduct'

const InitialPage: React.FC = () => {
  const { t } = useTranslation()
  const { menu, currentSection, setCurrentSection } = useMenuProvider()
  const { sections } = menu

  return (
    <>
      <Header />

      <Container>
        <Input
          startIcon={<FiSearch />}
          placeholder={t('menu.searchMenuItems')}
        />

        <CarouselSection
          sections={sections}
          selected={currentSection}
          onChangeSection={setCurrentSection}
        />

        <WrapperSection id='WrapperSection'>
          {sections?.map((sec) => (
            <Collapse title={sec.name}>
              <WrapperProducts>
                {sec.items?.map((it) => (
                  <ListItemProduct key={it.id} product={it} />
                ))}
              </WrapperProducts>
            </Collapse>
          ))}
        </WrapperSection>
      </Container>
    </>
  )
}

export default InitialPage
