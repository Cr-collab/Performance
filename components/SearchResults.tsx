import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Results[]
  onAddToWishList: (id:number) => void;

}

type Results = {
    id: number;
    name: string;
    price: number;
}

export function SearchResults({results, onAddToWishList } : SearchResultsProps){
  const totalPrice =   useMemo(() =>{
    return  results.reduce((total, product) => {
      return total + Number(product.price)
   }, 0)
  },[results])

  return (
    <div>
      <h2> {Math.floor(totalPrice)}  </h2>
      {
        results.map(result => {
          return (
            <ProductItem product={result} key={result.id} onAddToWishList={onAddToWishList} />
          )
        })
      }
    </div>
  );
}


/**
 *  A primeira funcionalidade vai ajudar  evitar que agente faça essa recalculação 
 *  principalmente em componentes filhos  , quando na verdade sabemos que não vai 
 *  mudar por causa do conteudo pai.
 * 
 *  cilco de renderização 
 *  1 - gera uma nova versão do componente 
 *  2 - compara a versão anterior a nova 
 *  3 - Se houverem alterações vai atualizar o que alterou.
 * 
 */