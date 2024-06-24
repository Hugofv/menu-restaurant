import React from 'react'
import { Wrapper, WrapperDescription, WrapperImage, WrapperInfo } from './style'
import Typography from '../Typography'
import { Product } from '~/models/menu'

interface IListItemProductProps {
  product: Product
}

const ListItemProduct: React.FC<IListItemProductProps> = ({ product }) => {
  return (
    <Wrapper>
      <WrapperInfo>
        <Typography variant='body1'>{product.name}</Typography>
        <WrapperDescription>
          <Typography variant='body2'>{product.description}</Typography>
        </WrapperDescription>
        <Typography variant='body1' color='secondary'>
          {product.price}
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
