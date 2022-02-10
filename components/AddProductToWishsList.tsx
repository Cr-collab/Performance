export interface AddProductToWishListProps {
  onAddToWishList: () => void
  onRequestClose: () => void
}
export function AddProductToWishList({
  onAddToWishList,
  onRequestClose
}: AddProductToWishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos ?
      <button onClick={onAddToWishList}> sim </button>
      <button onClick={onRequestClose}>não</button>
    </span>
  )
}
