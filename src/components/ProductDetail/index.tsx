import React from 'react'
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
import { Product } from '~/models/menu'
import { useTranslation } from 'react-i18next'
import ListItemOption from '../ListItemOption'
import formatMoney from '~/utils/formatMoney'
import { FiImage, FiX } from 'react-icons/fi'
import Counter from '../Counter'
import Button from '../Button'

interface IProductDetail {
  product: Product | null | undefined
  onClose: () => void
}

const ProductDetail: React.FC<IProductDetail> = ({ product, onClose }) => {
  const { t } = useTranslation()

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
                />
              ))}
            </WrapperOption>
          </>
        ))}
      </WrapperBody>

      <WrapperAction>
        <Counter />
        <Button>
          {t('menu.addToOrder')} - {formatMoney(product?.price || 0)}
        </Button>
      </WrapperAction>
    </Container>
  )
}

export default ProductDetail
