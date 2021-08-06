/* eslint-disable no-param-reassign */
import { useMemo } from 'react';

import { Product, ProductItem } from './ProductItem';

type SearchProductsProps = {
  products: Product[];
  onAddToWishList: (id: number) => void;
};

export function SearchResults({ products, onAddToWishList }: SearchProductsProps) {
  const totalPrice: any = useMemo(() => products.reduce((total, product) => total + product.price, 0), [products]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToWishList={onAddToWishList} />
      ))}
    </div>
  );
}
