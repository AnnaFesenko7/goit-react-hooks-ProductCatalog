import { useEffect, useState, useCallback } from 'react';
import { getLimitProducts } from './services/productCatalog-api';

import { useContext } from 'react';
import { limitContext } from 'contexts/limitsContext';

export const useProducts = () => {
  const limit = useLimit();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [skip, setSkip] = useState(0);

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);

    try {
      const data = await getLimitProducts(limit, skip);

      setProducts(data.products);
      setPageCount(Math.ceil(data.total / limit));
      setIsLoading(false);
    } catch (e) {
      setError({ error: e });
    } finally {
      setIsLoading(false);
    }
  }, [limit, skip]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const onPageNavigate = useCallback(
    index => {
      setActivePage(index + 1);
      setSkip(index * limit);
    },
    [limit]
  );

  return { products, isLoading, activePage, error, pageCount, onPageNavigate };
};

export const useLimit = () => {
  const limit = useContext(limitContext);
  return limit;
};
