export type Product = {
  id: number;
  price: number;
  title: string;
};

type ProductItemProps = {
  product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - R$ <strong>{product.price},00</strong>
    </div>
  );
}
