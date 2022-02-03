import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Results[]
}

type Results = {
    id: number;
    name: string;
    price: number;
}

export function SearchResults({results} : SearchResultsProps){
  return (
    <div>
      {
        results.map(result => {
          return (
            <ProductItem product={result} key={result.id}/>
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