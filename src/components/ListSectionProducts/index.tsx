import React from 'react'
import { Product, Section } from '~/models/menu'
import ListItemProduct from '../ListItemProduct'
import Collapse from '../Collapse'
import { WrapperProducts, WrapperSection } from './styles'

interface ListSectionProducts {
  sections: Section[]
  basket: Map<number, Product>
  handleDetailProduct?: (product: Product) => void
}

const ListSectionProducts: React.FC<ListSectionProducts> = ({
  sections,
  basket,
  handleDetailProduct
}) => {
  return (
    <WrapperSection id='WrapperSection'>
      {sections?.map((sec) => (
        <Collapse title={sec.name}>
          <WrapperProducts>
            {sec.items?.map((it) => (
              <ListItemProduct
                onSelectProduct={() => handleDetailProduct?.(it)}
                key={it.id}
                product={it}
                quantity={basket.get(it.id)?.quantity}
              />
            ))}
          </WrapperProducts>
        </Collapse>
      ))}
    </WrapperSection>
  )
}

export default ListSectionProducts
