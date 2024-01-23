import { useState, useEffect } from 'react';
import axios from 'axios';

const useWooCommerceAPI = () => {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define your WooCommerce API credentials
  const username ="ck_72a265661d99bbcf4b37a5ac44a7780e54f948b5";
  const password = 'cs_3b10064f35856f8d2ebf27e2ac8522c9480ee4e9';
  const basicAuth = btoa(`${username}:${password}`); // Encoding to Base64

  // Axios instance with the configured authorization header
  const api = axios.create({
    baseURL: 'https://central-achat.alphanewgroup.com/wp-json/wc/v3',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/json',
    },
  });

  // Function to fetch customers
  const fetchCustomers = async () => {
    try {
      const response = await api.get('/customers');
      setCustomers(response.data);
    } catch (error) {
      setError(error);
    }
  };

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      setError(error);
    }
  };

  // Function to fetch a specific product by ID
  const fetchProductById = async (productId) => {
    try {
      const response = await api.get(`/products/${productId}`);
      return response.data;
    } catch (error) {
      setError(error);
      return null;
    }
  };

  // Function to post a new customer
  const postCustomer = async (customerData) => {
    setLoading(true);

    try {
      await api.post('/customers', customerData);
      // Refresh customers after posting
      await fetchCustomers();
      setLoading(false);

    } catch (error) {
      setError(error?.response?.data?.message);
      setLoading(false);

      return `${error?.response?.data?.message}`;
    }
    setLoading(false);

    return 'Création réussie';
  };

  // Initial fetch of customers and products on component mount
  //  react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      await fetchCustomers();
      await fetchProducts();
      setLoading(false);
    };

    fetchData();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    customers,
    products,
    loading,
    error,
    fetchProductById,
    postCustomer,
  };
};

export default useWooCommerceAPI;