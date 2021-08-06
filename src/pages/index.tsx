import { FormEvent, useCallback, useState } from 'react';

import { Product } from '@perfreact/components/ProductItem';
import { SearchResults } from '@perfreact/components/SearchResults';
import styles from '@perfreact/styles/home.module.css';

type Results = {
  totalPrice: number;
  data: Product[];
};

export default function Home() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Results>();

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });

    const products = data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      priceFormatted: formatter.format(product.price),
    }));

    const totalPrice: number = data.reduce((total, product) => total + product.price, 0);

    setResults({ data: products, totalPrice });
  }

  const addToWishList = useCallback((id: number) => {
    console.log(`Add ${id}`);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1>Search</h1>

        <form onSubmit={handleSearch}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

          <button type="submit">Buscar</button>
        </form>
      </div>

      {results && <SearchResults products={results.data} totalPrice={results.totalPrice} onAddToWishlist={addToWishList} />}
    </div>
  );
}
