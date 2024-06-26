import React, { useMemo } from 'react'
import {
  BoxItem,
  BoxText,
  Header,
  WrapperCheckoutButton,
  WrapperIconClose,
  WrapperItems,
  WrapperTotal
} from './styles'
import Typography from '~/components/Typography'
import { useTranslation } from 'react-i18next'
import { FiX } from 'react-icons/fi'
import { useMenuProvider } from '~/templates/Menu/hooks/useMenuProvider'
import ListItemText from '~/components/ListItemText'
import { Product } from '~/models/menu'
import formatMoney from '~/utils/formatMoney'
import Paper from '~/components/Paper'
import Counter from '~/components/Counter'
import Button from '~/components/Button'

interface IBasket {
  onClose: () => void
}

const Basket: React.FC<IBasket> = ({ onClose }) => {
  const { t } = useTranslation()
  const { basket, setBasket } = useMenuProvider()

  const modifierName = (product: Product) => {
    return product.modifiersSelected?.map(
      (modifier) => `${modifier.name}(+${formatMoney(modifier.price)})`
    )
  }

  const priceItem = (product: Product) => {
    const price =
      product?.modifiersSelected?.reduce(
        (acc, modifier) => (acc += modifier.price),
        product?.price || 0
      ) || 0

    return price * (product.quantity || 1)
  }

  const changeQuantity = (product: Product, newQuantity: number) => {
    const newBasket = new Map(basket)

    if (!newQuantity) {
      newBasket.delete(product.id)
    } else {
      const newProduct = { ...product, quantity: newQuantity } as Product
      newBasket.set(newProduct.id, newProduct)
    }
    setBasket(newBasket)
  }

  const handleCheckout = () => {
    alert('Pedido Realizado com sucesso!')
    setBasket(new Map<number, Product>())
    onClose()
  }

  const items = useMemo(() => [...basket.values()], [basket])

  const totalPrice = useMemo(
    () => items.reduce((acc, item) => (acc += priceItem(item)), 0),
    [items]
  )
  return (
    <>
      <Header>
        <Typography variant='h3'>{t('menu.basket')}</Typography>
        <WrapperIconClose onClick={onClose}>
          <FiX size='1.5rem' />
        </WrapperIconClose>
      </Header>

      <Paper>
        <WrapperItems>
          {items?.map((item) => (
            <BoxItem>
              <ListItemText
                primary={item.name}
                secondary={modifierName(item)}
                info={formatMoney(priceItem(item))}
              />
              <Counter
                size='small'
                value={item.quantity}
                setValue={(newValue) => changeQuantity(item, newValue)}
              />
            </BoxItem>
          ))}
        </WrapperItems>
      </Paper>

      <WrapperTotal>
        <BoxText border>
          <Typography variant='h5'>{t('common.subTotal')}</Typography>
          <Typography variant='h5' fontWeight='500'>
            {formatMoney(totalPrice)}
          </Typography>
        </BoxText>

        <BoxText>
          <Typography variant='h1' fontWeight='300'>
            {t('common.total')}
          </Typography>
          <Typography variant='h1' fontWeight='700'>
            {formatMoney(totalPrice)}
          </Typography>
        </BoxText>
      </WrapperTotal>

      <WrapperCheckoutButton>
        <Button onClick={handleCheckout}>{t('menu.checkoutNow')}</Button>
      </WrapperCheckoutButton>
    </>
  )
}

export default Basket
