/* eslint-disable no-param-reassign */
import { useMemo } from 'react';

import { Product, ProductItem } from './ProductItem';

type SearchProductsProps = {
  products: Product[];
};

export function SearchResults({ products }: SearchProductsProps) {
  const totalPrice: any = useMemo(() => products.reduce((total, product) => total + product.price, 0), [products]);

  return (
    <div>
      <h2>{totalPrice}</h2>

      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
