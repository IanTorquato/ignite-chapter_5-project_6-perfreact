/* eslint-disable no-param-reassign */
import { Product, ProductItem } from '@perfreact/components/ProductItem';

type SearchProductsProps = {
  products: Product[];
  totalPrice: number;
  onAddToWishlist: (id: number) => void;
};

export function SearchResults({ products, totalPrice, onAddToWishlist }: SearchProductsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>

      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
      ))}
    </div>
  );
}
