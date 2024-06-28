import React from 'react'
import {
  Badge,
  BoxTitle,
  Wrapper,
  WrapperDescription,
  WrapperImage,
  WrapperInfo
} from './style'
import Typography from '../Typography'
import { Product } from '~/models/menu'
import formatMoney from '~/utils/formatMoney'

interface IListItemProductProps {
  product: Product
  quantity?: number
  onSelectProduct: () => void
}

const ListItemProduct: React.FC<IListItemProductProps> = ({
  quantity,
  product,
  onSelectProduct
}) => {
  return (
    <Wrapper onClick={onSelectProduct} data-testid={`ItemProduct-${product.id}`}>
      <WrapperInfo>
        <BoxTitle>
          {quantity && (
            <Badge>
              <Typography variant='caption1' color='light'>{quantity}</Typography>
            </Badge>
          )}
          <Typography variant='body1'>{product.name}</Typography>
        </BoxTitle>
        <WrapperDescription>
          <Typography variant='body2'>{product.description}</Typography>
        </WrapperDescription>
        <Typography variant='body1' color='secondary'>
          {formatMoney(product.price)}
        </Typography>
      </WrapperInfo>
      {product.images?.[0]?.image && (
        <WrapperImage>
          <img src={product.images?.[0]?.image} />
        </WrapperImage>
      )}
    </Wrapper>
  )
}

export default ListItemProduct
