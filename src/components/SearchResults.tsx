/* eslint-disable no-param-reassign */
import { List, ListRowRenderer } from 'react-virtualized';

import { Product, ProductItem } from '@perfreact/components/ProductItem';

type SearchProductsProps = {
  products: Product[];
  totalPrice: number;
  onAddToWishlist: (id: number) => void;
};

export function SearchResults({ products, totalPrice, onAddToWishlist }: SearchProductsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => (
    <div key={key} style={style}>
      <ProductItem product={products[index]} onAddToWishlist={onAddToWishlist} />
    </div>
  );

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        rowHeight={32}
        height={400}
        width={704}
        overscanRowCount={4}
        rowCount={products.length}
        rowRenderer={rowRenderer}
      />

      {/* {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToWishlist={onAddToWishlist} />
      ))} */}
    </div>
  );
}
