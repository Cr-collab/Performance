interface ProductItemProps {
  product : {
    id : number;
    price : number;
    name : string;
  }
}

export function ProductItem({product} : ProductItemProps){
  return (
      <div className="list-item"> 
            {product.name} - <strong> {product.price}</strong> 
      </div>
  )
}