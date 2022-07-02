import { useEffect, useState, useCallback } from 'react';
import { getProductById } from '../services/productCatalog-api';

export const useDetails = productId => {
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchProductById = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getProductById(productId);
      setProductDetails(data);
      setIsLoading(false);
    } catch (e) {
      setError({ error: e });
    } finally {
      setIsLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    fetchProductById();
  }, [fetchProductById]);

  return { productDetails, isLoading, error };
};
