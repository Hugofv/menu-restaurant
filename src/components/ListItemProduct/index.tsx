import React from 'react'
import { Wrapper, WrapperInfo } from './style'
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
        <Typography variant='body2'>{product.description}</Typography>
        <Typography variant='body1' color='secondary'>
          {product.price}
        </Typography>
      </WrapperInfo>
    </Wrapper>
  )
}

export default ListItemProduct
