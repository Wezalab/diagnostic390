import { useState, useEffect } from 'react';
import axios from 'axios';

const useWooCommerceAPI = () => {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [commandes, setCommandes]= useState([]);
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
      setLoading(true);
      try {
        const response = await api.get('/customers?per_page=100');
        setCustomers(response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
      setLoading(false);
    };

  // Function to fetch products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get('/products?per_page=100');
      setProducts(response.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    setLoading(false);
  };

   // Function to fetch products
   const fetchCommandes = async () => {
    setLoading(true);
    try {
      const response = await api.get('/orders?per_page=100');
      setCommandes(response.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    setLoading(false);
  };

  // Function to fetch products
  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await api.get('/products/categories?per_page=100');

      setCategories(response.data);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
    setLoading(false);

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
      console.log("error", error);
      setError(error?.response?.data?.message !== undefined? error?.response?.data?.message : "Verifiez votre internet!" );
      setLoading(false);

      return `${error?.response?.data?.message !== undefined? error?.response?.data?.message : "Verifiez votre internet!" }`;
    }
    setLoading(false);

    return 'Création réussie';
  };

   // Function to update an existing customer
   const updateCustomer = async (customerData, id) => {
    setLoading(true);

    try {
      await api.put(`/customers/${id}`, customerData);
      // Refresh customers after posting
      await fetchCustomers();
      setLoading(false);

    } catch (error) {
      setError(error?.response?.data?.message !== undefined? error?.response?.data?.message : "Verifiez votre internet!" );
      setLoading(false);

      return `${error?.response?.data?.message !== undefined? error?.response?.data?.message : "Verifiez votre internet!" }`;
    }
    setLoading(false);

    return 'Modification réussie';
  };

  // Function to post a new customer
  const postProduct= async (productData) => {
    setLoading(true);

    try {
      await api.post('/products', productData);
      // Refresh product after posting
      await fetchProducts();
      setLoading(false);

    } catch (error) {
      setError(error?.response?.data?.message !== undefined? error?.response?.data?.message : "Verifiez votre internet!" );
      setLoading(false);

      return `${error?.response?.data?.message !== undefined? error?.response?.data?.message : "Verifiez votre internet!" }`;
    }
    setLoading(false);

    return 'Création réussie';
  };

   // Function to post a new customer
   const editProduct= async (productData, id) => {
    setLoading(true);

    try {
      await api.put(`/products/${id}`, productData);
      // Refresh product after posting
      await fetchProducts();
      setLoading(false);

    } catch (error) {
      setError(error?.response?.data?.message !== undefined? error?.response?.data?.message : "Verifiez votre internet!" );
      setLoading(false);

      return `${error?.response?.data?.message !== undefined? error?.response?.data?.message : "Verifiez votre internet!" }`;
    }
    setLoading(false);

    return 'Modification réussie';
  };

  // Initial fetch of customers and products on component mount
  //  react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      await fetchCustomers();
      await fetchProducts();
      await fetchCategories();
      setLoading(false);
    };

    fetchData();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    products,
    postProduct,
    fetchProducts,
    editProduct,
    fetchProductById,

    categories,
    fetchCategories,

    customers,
    fetchCustomers,
    postCustomer,
    updateCustomer,

    commandes,
    fetchCommandes,

    loading,
    error,
  };
};

export default useWooCommerceAPI;
