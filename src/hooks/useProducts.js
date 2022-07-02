// import { useReducer } from 'react';
import { useEffect, useState, useCallback } from 'react';
import { getLimitProducts } from '../services/productCatalog-api';
import { useLimit } from './useLimit';
import { useNavigate } from 'react-router-dom';

export const useProducts = () => {
  const navigate = useNavigate();
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
      navigate(`?pageNumber=${index + 1}`);
    },
    [limit, navigate]
  );

  return { products, isLoading, activePage, error, pageCount, onPageNavigate };
};

// const action = {
//   type: FETCH_DATA,
//   payload: 'dsdsds',
// };

// const reducer = (state, action) => {
//   return state;
// };
// export const useProducts = () => {
//   const [{ products, isLoading, activePage, error, pageCount }, dispatch] =
//     useReducer(reducer, {
//       products: [],
//       isLoading: false,
//       activePage: 1,
//       error: null,
//       pageCount: 0,
//     });

//   dispatch({ type: FETCH_DATA });
// };
