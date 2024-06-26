import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '~/components/Header'
import { useMenuProvider } from '../../hooks/useMenuProvider'
import { FiSearch } from 'react-icons/fi'
import Input from '~/components/Input'
import CarouselSection from '~/components/CarouselSection'
import ListSectionProducts from '~/components/ListSectionProducts'
import { BoxSection, CardProducts, Container, WrapperContainer } from './styles'
import Basket from './Basket'
import { Product } from '~/models/menu'
import ProductDetail from '~/components/ProductDetail'
import Modal from 'react-responsive-modal'

const DesktopView: React.FC = () => {
  const { t } = useTranslation()

  interface IOpenDetail {
    open: boolean
    item: Product | undefined | null
  }
  const [openDetail, setOpenDetail] = useState<IOpenDetail>({
    open: false,
    item: null
  })

  const {
    menuFiltered,
    basket,
    query,
    setQuery,
    currentSection,
    setCurrentSection,
    addProductOnBasket
  } = useMenuProvider()
  const { sections } = menuFiltered

  const handleDetailProduct = (product: Product) => {
    setOpenDetail({ open: true, item: product })
  }

  const handleCloseDetailProduct = () => {
    setOpenDetail({ open: false, item: null })
  }

  const handleAddProduct = (product: Product) => {
    addProductOnBasket(product)
    handleCloseDetailProduct()
  }

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

              <ListSectionProducts
                sections={sections}
                basket={basket}
                handleDetailProduct={handleDetailProduct}
              />
            </CardProducts>

            <Basket />
          </BoxSection>
        </Container>
      </WrapperContainer>

      <Modal
        open={openDetail.open}
        showCloseIcon={false}
        onClose={handleCloseDetailProduct}
        styles={{
          modal: {
            padding: 0,
            width: '30rem'
          }
        }}
        center
      >
        <ProductDetail
          product={openDetail.item}
          onClose={handleCloseDetailProduct}
          onAddProduct={handleAddProduct}
        />
      </Modal>
    </>
  )
}

export default DesktopView
