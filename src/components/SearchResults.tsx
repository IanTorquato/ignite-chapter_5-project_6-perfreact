import { Product, ProductItem } from './ProductItem';

type SearchProductsProps = {
  products: Product[];
};

export function SearchResults({ products }: SearchProductsProps) {
  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
