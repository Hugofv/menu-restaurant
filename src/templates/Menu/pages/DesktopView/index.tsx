import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '~/components/Header'
import { useMenuProvider } from '../../hooks/useMenuProvider'
import { FiSearch } from 'react-icons/fi'
import Input from '~/components/Input'
import CarouselSection from '~/components/CarouselSection'
import ListSectionProducts from '~/components/ListSectionProducts'
import { BoxSection, CardProducts, Container, WrapperContainer } from './styles'
import Basket from './Basket'

const DesktopView: React.FC = () => {
  const { t } = useTranslation()
  const {
    menuFiltered,
    basket,
    query,
    setQuery,
    currentSection,
    setCurrentSection
  } = useMenuProvider()
  const { sections } = menuFiltered

  return (
    <>
      <Header />
      <WrapperContainer>
        <Container>
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            startIcon={<FiSearch />}
            placeholder={t('menu.searchMenuItems')}
          />

          <BoxSection>
            <CardProducts>
              <CarouselSection
                sections={sections}
                selected={currentSection}
                onChangeSection={setCurrentSection}
              />

              <ListSectionProducts sections={sections} basket={basket} />
            </CardProducts>

            <Basket />
          </BoxSection>
        </Container>
      </WrapperContainer>
    </>
  )
}

export default DesktopView
