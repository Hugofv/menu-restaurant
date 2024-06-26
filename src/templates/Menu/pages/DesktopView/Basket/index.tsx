import React from 'react'
import { Container, HeaderTitle, WrapperBasket } from './styles'
import { useTranslation } from 'react-i18next'
import Typography from '~/components/Typography'
import { useMenuProvider } from '~/templates/Menu/hooks/useMenuProvider'
import DetailBasket from '~/components/DetailBasket'
import Button from '~/components/Button'
import { Product } from '~/models/menu'

const Basket: React.FC = () => {
  const { t } = useTranslation()
  const { basket, setBasket } = useMenuProvider()

  const handleCheckout = () => {
    alert('Pedido Realizado com sucesso!')
    setBasket(new Map<number, Product>())
  }

  return (
    <WrapperBasket>
      <Container>
        <HeaderTitle>
          <Typography variant='h1'>{t('menu.basket')}</Typography>
        </HeaderTitle>
        <DetailBasket basket={basket} setBasket={setBasket} />
      </Container>
      <Button disabled={!basket.size} onClick={handleCheckout}>
        {t('menu.checkoutNow')}
      </Button>
    </WrapperBasket>
  )
}

export default Basket
