import { memo } from 'react';

export type Product = {
  id: number;
  price: number;
  title: string;
};

type ProductItemProps = {
  product: Product;
};

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - R$ <strong>{product.price},00</strong>
    </div>
  );
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) =>
  Object.is(prevProps.product, nextProps.product),
);
