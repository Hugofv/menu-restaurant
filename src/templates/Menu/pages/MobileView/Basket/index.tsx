import React from 'react'
import { Header, WrapperCheckoutButton, WrapperIconClose } from './styles'
import Typography from '~/components/Typography'
import { FiX } from 'react-icons/fi'
import { useMenuProvider } from '~/templates/Menu/hooks/useMenuProvider'
import { Product } from '~/models/menu'
import Button from '~/components/Button'
import { useTranslation } from 'react-i18next'
import DetailBasket from '~/components/DetailBasket'

interface IBasket {
  onClose: () => void
}

const Basket: React.FC<IBasket> = ({ onClose }) => {
  const { t } = useTranslation()
  const { basket, setBasket } = useMenuProvider()

  const handleCheckout = () => {
    alert('Pedido Realizado com sucesso!')
    setBasket(new Map<number, Product>())
    onClose()
  }

  return (
    <>
      <Header>
        <Typography variant='h3'>{t('menu.basket')}</Typography>
        <WrapperIconClose onClick={onClose}>
          <FiX size='1.5rem' />
        </WrapperIconClose>
      </Header>

      <DetailBasket basket={basket} setBasket={setBasket} />
      <WrapperCheckoutButton>
        <Button onClick={handleCheckout}>{t('menu.checkoutNow')}</Button>
      </WrapperCheckoutButton>
    </>
  )
}

export default Basket
