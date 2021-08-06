/* eslint-disable no-param-reassign */
import { Product, ProductItem } from '@perfreact/components/ProductItem';

type SearchProductsProps = {
  products: Product[];
  totalPrice: number;
  onAddToWishList: (id: number) => void;
};

export function SearchResults({ products, totalPrice, onAddToWishList }: SearchProductsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
      ))}
    </div>
  );
}
