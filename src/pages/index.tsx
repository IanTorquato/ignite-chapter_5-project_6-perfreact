import { FormEvent, useCallback, useState } from 'react';

import { SearchResults } from '@perfreact/components/SearchResults';
import styles from '@perfreact/styles/home.module.css';

export default function Home() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setProducts(data);
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

      {!!products[0] && <SearchResults products={products} onAddToWishList={addToWishList} />}
    </div>
  );
}
