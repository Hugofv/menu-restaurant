import React from 'react'
import { Container, HeaderTitle } from './styles'
import { useTranslation } from 'react-i18next'
import Typography from '~/components/Typography'
import { useMenuProvider } from '~/templates/Menu/hooks/useMenuProvider'
import DetailBasket from '~/components/DetailBasket'

const Basket: React.FC = () => {
  const { t } = useTranslation()
  const { basket, setBasket } = useMenuProvider()

  return (
    <Container>
      <HeaderTitle>
        <Typography variant='h1'>{t('menu.basket')}</Typography>
      </HeaderTitle>
      <DetailBasket basket={basket} setBasket={setBasket} />
    </Container>
  )
}

export default Basket
