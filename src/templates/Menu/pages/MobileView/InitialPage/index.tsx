import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiSearch } from 'react-icons/fi'
import Header from '~/components/Header'
import Input from '~/components/Input'
import {
  Container,
  WrapperCarousel,
  WrapperProducts,
  WrapperSection
} from './styles'
import CarouselSection from '~/components/CarouselSection'
import { useMenuProvider } from '~/templates/Menu/hooks/useMenuProvider'
import Collapse from '~/components/Collapse'
import ListItemProduct from '~/components/ListItemProduct'

const InitialPage: React.FC = () => {
  const { t } = useTranslation()
  const { menuFiltered, query, setQuery, currentSection, setCurrentSection } =
    useMenuProvider()
  const { sections } = menuFiltered

  return (
    <>
      <Header />

      <Container>
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          startIcon={<FiSearch />}
          placeholder={t('menu.searchMenuItems')}
        />

        <WrapperCarousel>
          <CarouselSection
            sections={sections}
            selected={currentSection}
            onChangeSection={setCurrentSection}
          />
        </WrapperCarousel>

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
