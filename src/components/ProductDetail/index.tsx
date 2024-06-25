import React from 'react'
import {
  WrapperHeadOption,
  WrapperImage,
  WrapperInfo,
  WrapperOption
} from './styles'
import Typography from '~/components/Typography'
import { Product } from '~/models/menu'
import { useTranslation } from 'react-i18next'
import ListItemOption from '../ListItemOption'
import formatMoney from '~/utils/formatMoney'

interface IProductDetail {
  product: Product | null | undefined
}

const ProductDetail: React.FC<IProductDetail> = ({ product }) => {
  const { t } = useTranslation()

  return (
    <>
      <WrapperImage>
        <img src={product?.images?.[0]?.image} />
      </WrapperImage>
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
    </>
  )
}

export default ProductDetail
