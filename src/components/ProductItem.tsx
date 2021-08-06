import dynamic from 'next/dynamic';
import { memo, useState } from 'react';

import { AddProductToWishlistProps } from '@perfreact/components/AddProductToWishlist';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => import('@perfreact/components/AddProductToWishlist').then((mod) => mod.AddProductToWishlist),
  // eslint-disable-next-line react/display-name
  { loading: () => <span>Carregando...</span> },
);

export type Product = {
  id: number;
  price: number;
  title: string;
  priceFormatted: string;
};

type ProductItemProps = {
  product: Product;
  onAddToWishlist: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      <div>
        {product.title} - <strong>{product.priceFormatted}</strong>
      </div>

      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product),
);
