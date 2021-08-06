import { memo } from 'react';

export type Product = {
  id: number;
  price: number;
  title: string;
  priceFormatted: string;
};

type ProductItemProps = {
  product: Product;
  onAddToWishList: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div>
      <div>
        {product.title} - <strong>{product.priceFormatted}</strong>
      </div>
      <button onClick={() => onAddToWishList(product.id)}>Add to wishlist</button>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product),
);
