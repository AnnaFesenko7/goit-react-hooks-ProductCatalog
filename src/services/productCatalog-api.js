import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dummyjson.com',
});

export async function getSearchedProducts(searchQuery, limit, skip) {
  const response = await api.get(
    `/products/search?q=${searchQuery}&limit=${limit}&skip=${skip}`
  );
  return response.data;
}

export async function getLimitProducts(limit, skip) {
  const response = await api.get(`/products?limit=${limit}&skip=${skip}`);
  return response.data;
}

export async function getProductById(productId) {
  const response = await api.get(`/products/${productId}`);
  return response.data;
}
