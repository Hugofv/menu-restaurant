import React, { ChangeEvent, useMemo, useState } from 'react'
import {
  Container,
  WrapperAction,
  WrapperBody,
  WrapperHeadOption,
  WrapperIconClose,
  WrapperImage,
  WrapperInfo,
  WrapperOption
} from './styles'
import Typography from '~/components/Typography'
import { ModifierOption, Product } from '~/models/menu'
import { useTranslation } from 'react-i18next'
import ListItemOption from '../ListItemOption'
import formatMoney from '~/utils/formatMoney'
import { FiImage, FiX } from 'react-icons/fi'
import Counter from '../Counter'
import Button from '../Button'

interface IProductDetail {
  product: Product | null | undefined
  onClose: () => void
  onAddProduct: (product: Product) => void
}

const ProductDetail: React.FC<IProductDetail> = ({
  product,
  onClose,
  onAddProduct
}) => {
  const [modifiersSelected, setModifiersSelected] = useState<ModifierOption[]>(
    []
  )
  const [quantity, setQuantity] = useState(1)
  const { t } = useTranslation()

  const checkIsSelected = (option: ModifierOption): boolean => {
    const item = modifiersSelected.find((modifier) => modifier.id === option.id)
    return !!item
  }

  const handleChangeModifier = (
    event: ChangeEvent<HTMLInputElement>,
    option: ModifierOption
  ) => {
    if (event.target.checked) {
      const newModifiers = JSON.parse(JSON.stringify(modifiersSelected))
      if (modifiersSelected.length < option.maxChoices) {
        newModifiers.push(option)
      } else {
        newModifiers.pop()
        newModifiers.push(option)
      }

      setModifiersSelected(newModifiers)
    } else {
      const newModifiers = modifiersSelected.filter(
        (modifier) => modifier.id !== option.id
      )
      setModifiersSelected(newModifiers)
    }
  }

  const handleAddOnBasket = () => {
    onAddProduct({ ...product, quantity, modifiersSelected } as Product)
  }

  const totalAmount = useMemo(() => {
    const price = modifiersSelected.reduce(
      (acc, modifier) => (acc += modifier.price),
      product?.price || 0
    )

    return price * quantity
  }, [modifiersSelected, product?.price, quantity])

  const addAvailable = useMemo(() => {
    const minChoices =
      product?.modifiers?.reduce(
        (acc, modifier) => (acc += modifier.minChoices),
        0
      ) || 0

    return minChoices <= modifiersSelected.length
  }, [modifiersSelected.length, product?.modifiers])

  return (
    <Container>
      <WrapperImage>
        {product?.images?.[0]?.image ? (
          <img src={product?.images?.[0]?.image} />
        ) : (
          <FiImage size='15rem' />
        )}
        <WrapperIconClose onClick={onClose}>
          <FiX size='1.5rem' />
        </WrapperIconClose>
      </WrapperImage>

      <WrapperBody>
        <WrapperInfo>
          <Typography variant='h1'>{product?.name}</Typography>
          <Typography variant='body2'>{product?.description}</Typography>
        </WrapperInfo>

        {product?.modifiers?.map((modifier) => (
          <>
            <WrapperHeadOption key={modifier.id}>
              <Typography variant='body1'>{modifier.name}</Typography>
              <Typography variant='body2'>
                {t('common.select')} {modifier.maxChoices}{' '}
                {t('common.option').toLowerCase()}
              </Typography>
            </WrapperHeadOption>

            <WrapperOption>
              {modifier.items?.map((item) => (
                <ListItemOption
                  primary={item.name}
                  secondary={formatMoney(item.price)}
                  checked={checkIsSelected(item)}
                  onChange={(event) => handleChangeModifier(event, item)}
                />
              ))}
            </WrapperOption>
          </>
        ))}
      </WrapperBody>

      <WrapperAction>
        <Counter minValue={1} value={quantity} setValue={setQuantity} />
        <Button disabled={!addAvailable} onClick={handleAddOnBasket}>
          {t('menu.addToOrder')} • {formatMoney(totalAmount)}
        </Button>
      </WrapperAction>
    </Container>
  )
}

export default ProductDetail
