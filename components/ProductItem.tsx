import dynamic from 'next/dynamic'
import { memo, useState } from 'react'
import { AddProductToWishListProps } from './AddProductToWishsList'

const AddProductWishList = dynamic<AddProductToWishListProps>(
  () => {
    return import('./AddProductToWishsList').then(
      mod => mod.AddProductToWishList
    )
  },
  {
    loading: () => <span> Carregando </span>
  }
)

interface ProductItemProps {
  product: {
    id: number
    price: number
    priceFormatted: string
    name: string
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)
  return (
    <div className="list-item">
      {product.name} - <strong> {product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        {' '}
        adicionar aos favoritos{' '}
      </button>
      {isAddingToWishlist && (
        <AddProductWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
  }
)
