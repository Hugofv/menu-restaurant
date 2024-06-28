import React, { useMemo } from 'react'
import Paper from '../Paper'
import { BoxItem, BoxText, WrapperItems, WrapperTotal } from './styles'
import ListItemText from '../ListItemText'
import Counter from '../Counter'
import Typography from '../Typography'
import formatMoney from '~/utils/formatMoney'
import { Product } from '~/models/menu'
import { useTranslation } from 'react-i18next'

interface IDetailBasket {
  basket: Map<number, Product>
  setBasket: React.Dispatch<React.SetStateAction<Map<number, Product>>>
}

const DetailBasket: React.FC<IDetailBasket> = ({ basket, setBasket }) => {
  const { t } = useTranslation()

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

  const items = useMemo(() => [...basket.values()], [basket])

  const totalPrice = useMemo(
    () => items.reduce((acc, item) => (acc += priceItem(item)), 0),
    [items]
  )

  return (
    <>
      <Paper data-testid='DetailBasket'>
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
    </>
  )
}

export default DetailBasket
