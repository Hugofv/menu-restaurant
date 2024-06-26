import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiSearch } from 'react-icons/fi'
import Header from '~/components/Header'
import Input from '~/components/Input'
import {
  Container,
  WrapperBasketButton,
  WrapperCarousel,
  WrapperInfo,
  WrapperProducts,
  WrapperSection
} from './styles'
import CarouselSection from '~/components/CarouselSection'
import { useMenuProvider } from '~/templates/Menu/hooks/useMenuProvider'
import Collapse from '~/components/Collapse'
import ListItemProduct from '~/components/ListItemProduct'
import Typography from '~/components/Typography'
import { useMobileViewContext } from '../hooks/useMobileViewContext'
import { Product } from '~/models/menu'
import { STEP_MOBILE_VIEW } from '../constants'
import Button from '~/components/Button'

const InitialPage: React.FC = () => {
  const { t } = useTranslation()
  const [carouselStick, setCarouselStick] = useState(false)
  const {
    menuFiltered,
    basket,
    query,
    setQuery,
    currentSection,
    setCurrentSection
  } = useMenuProvider()
  const { setProductSelected, setStep } = useMobileViewContext()
  const { sections } = menuFiltered

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  const isSticky = () => {
    const scrollTop = window.scrollY
    if (scrollTop >= 250) {
      setCarouselStick(true)
    } else if (!carouselStick) {
      setCarouselStick(false)
    }
  }

  const handleDetailProduct = (product: Product) => {
    setProductSelected(product)
    setStep(STEP_MOBILE_VIEW.PRODUCT_DETAIL)
  }

  const handleOpenBasket = () => {
    setStep(STEP_MOBILE_VIEW.BASKET)
  }

  const quantityItemsProduct = useMemo(() => {
    const items = [...basket.values()]
    return items.reduce((acc, item) => (acc += item.quantity || 0), 0)
  }, [basket])

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

        <WrapperCarousel isSticky={carouselStick}>
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
                  <ListItemProduct
                    onSelectProduct={() => handleDetailProduct(it)}
                    key={it.id}
                    product={it}
                    quantity={basket.get(it.id)?.quantity}
                  />
                ))}
              </WrapperProducts>
            </Collapse>
          ))}
        </WrapperSection>
      </Container>

      <WrapperInfo>
        <Typography variant='link' color='main' textAlign='center'>
          {t('menu.viewAllergyInformation')}
        </Typography>
      </WrapperInfo>

      {quantityItemsProduct && (
        <WrapperBasketButton>
          <Button onClick={handleOpenBasket}>
            {t('menu.yourBasket')}
            {' • '}
            {quantityItemsProduct} {t('menu.item').toLowerCase()}
          </Button>
        </WrapperBasketButton>
      )}
    </>
  )
}

export default InitialPage
