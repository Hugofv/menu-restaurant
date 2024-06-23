import React from 'react'
import { useTranslation } from 'react-i18next'
import { FiSearch } from 'react-icons/fi'
import Header from '~/components/Header'
import Input from '~/components/Input'
import { Container } from './styles'
import Carousel from '~/components/Carousel'

const InitialPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Header />

      <Container>
        <Input
          startIcon={<FiSearch />}
          placeholder={t('menu.searchMenuItems')}
        />

        <Carousel />
      </Container>
    </>
  )
}

export default InitialPage
