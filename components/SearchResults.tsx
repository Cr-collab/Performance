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