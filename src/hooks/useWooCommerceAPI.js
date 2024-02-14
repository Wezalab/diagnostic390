import { useState, useEffect } from 'react';
import axios from 'axios';

const useWooCommerceAPI = () => {
  const [customers, setCustomers] = useState([
    {
        "id": 22,
        "date_created": "2024-01-24T21:36:12",
        "date_created_gmt": "2024-01-24T21:36:12",
        "date_modified": "2024-01-24T21:36:13",
        "date_modified_gmt": "2024-01-24T21:36:13",
        "email": "vendor2.doe@example.com",
        "first_name": "3vendor 2",
        "last_name": "3vendor name",
        "role": "customer",
        "username": "3vendor.doe",
        "billing": {
            "first_name": "John",
            "last_name": "Doe",
            "company": "",
            "address_1": "969 Market",
            "address_2": "",
            "city": "San Francisco",
            "postcode": "94103",
            "country": "US",
            "state": "CA",
            "email": "john.doe@example.com",
            "phone": "(555) 555-5555"
        },
        "shipping": {
            "first_name": "John",
            "last_name": "Doe",
            "company": "",
            "address_1": "969 Market",
            "address_2": "",
            "city": "San Francisco",
            "postcode": "94103",
            "country": "US",
            "state": "CA",
            "phone": ""
        },
        "is_paying_customer": false,
        "avatar_url": "https://secure.gravatar.com/avatar/9fda1b7323a8a3ff5d4c0ca00e74d74a?s=96&d=mm&r=g",
        "meta_data": [
            {
                "id": 443,
                "key": "role",
                "value": "vendor"
            }
        ],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/22"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers"
                }
            ]
        }
    },
    {
        "id": 18,
        "date_created": "2024-01-23T10:03:19",
        "date_created_gmt": "2024-01-23T10:03:19",
        "date_modified": "2024-01-23T10:03:19",
        "date_modified_gmt": "2024-01-23T10:03:19",
        "email": "fm@test.com",
        "first_name": "fm",
        "last_name": "",
        "role": "customer",
        "username": "fm",
        "billing": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "email": "",
            "phone": ""
        },
        "shipping": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "phone": ""
        },
        "is_paying_customer": false,
        "avatar_url": "https://secure.gravatar.com/avatar/84c5a7f6796b1c5ef97f37a7d646d7e7?s=96&d=mm&r=g",
        "meta_data": [],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/18"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers"
                }
            ]
        }
    },
    {
        "id": 20,
        "date_created": "2024-01-23T10:09:47",
        "date_created_gmt": "2024-01-23T10:09:47",
        "date_modified": "2024-01-31T13:12:52",
        "date_modified_gmt": "2024-01-31T13:12:52",
        "email": "jean@test.com",
        "first_name": "Jean",
        "last_name": "",
        "role": "customer",
        "username": "jean",
        "billing": {
            "first_name": "Jean",
            "last_name": "jean",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Kinshasa",
            "postcode": "061",
            "country": "CD",
            "state": "RDC",
            "email": "jean@test.com",
            "phone": ""
        },
        "shipping": {
            "first_name": "Jean",
            "last_name": "jean",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Kinshasa",
            "postcode": "061",
            "country": "CD",
            "state": "RDC",
            "phone": ""
        },
        "is_paying_customer": false,
        "avatar_url": "https://secure.gravatar.com/avatar/3a62caf824b47d6216e441c3a588c457?s=96&d=mm&r=g",
        "meta_data": [
            {
                "id": 473,
                "key": "wc_last_active",
                "value": "1706659200"
            },
            {
                "id": 477,
                "key": "screen_layout_inspire_invoice",
                "value": "1"
            },
            {
                "id": 479,
                "key": "jetpack_tracks_anon_id",
                "value": "woo:+q8asYyVHCplrcbs4uG6y+JN"
            }
        ],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers"
                }
            ]
        }
    },
    {
        "id": 21,
        "date_created": "2024-01-24T16:58:40",
        "date_created_gmt": "2024-01-24T16:58:40",
        "date_modified": "2024-01-24T16:58:40",
        "date_modified_gmt": "2024-01-24T16:58:40",
        "email": "jean@test.com5",
        "first_name": "dan",
        "last_name": "",
        "role": "customer",
        "username": "jean-8874",
        "billing": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "email": "",
            "phone": ""
        },
        "shipping": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "phone": ""
        },
        "is_paying_customer": false,
        "avatar_url": "https://secure.gravatar.com/avatar/784ab7e9768197d98ab92a99c05cc5eb?s=96&d=mm&r=g",
        "meta_data": [
            {
                "id": 498,
                "key": "wc_last_active",
                "value": "1706054400"
            }
        ],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/21"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers"
                }
            ]
        }
    },
    {
        "id": 2,
        "date_created": "2024-01-20T18:32:06",
        "date_created_gmt": "2024-01-20T18:32:06",
        "date_modified": "2024-01-24T21:41:14",
        "date_modified_gmt": "2024-01-24T21:41:14",
        "email": "wezalab@gmail.com",
        "first_name": "Joseph",
        "last_name": "Joseph",
        "role": "customer",
        "username": "Fournisseur1",
        "billing": {
            "first_name": "Fournisseur",
            "last_name": "1",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "email": "wezalab@gmail.com",
            "phone": ""
        },
        "shipping": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "phone": ""
        },
        "is_paying_customer": true,
        "avatar_url": "https://secure.gravatar.com/avatar/9a398ac4ad4201ed6f722972d8d7701b?s=96&d=mm&r=g",
        "meta_data": [
            {
                "id": 43,
                "key": "dokan_enable_selling",
                "value": "yes"
            },
            {
                "id": 45,
                "key": "texty_phone",
                "value": ""
            },
            {
                "id": 53,
                "key": "wc_last_active",
                "value": "1705795200"
            },
            {
                "id": 444,
                "key": "vat_number",
                "value": ""
            },
            {
                "id": 445,
                "key": "dokan_profile_settings",
                "value": {
                    "store_name": "",
                    "social": {
                        "fb": "",
                        "twitter": "",
                        "pinterest": "",
                        "linkedin": "",
                        "youtube": "",
                        "instagram": "",
                        "flickr": ""
                    },
                    "payment": {
                        "paypal": [
                            "email"
                        ],
                        "bank": []
                    },
                    "phone": "",
                    "show_email": "no",
                    "address": {
                        "street_1": "",
                        "street_2": "",
                        "city": "",
                        "zip": "",
                        "country": "",
                        "state": ""
                    },
                    "location": "",
                    "banner": 0,
                    "icon": 0,
                    "gravatar": 0,
                    "enable_tnc": "off",
                    "store_tnc": "",
                    "show_min_order_discount": "no",
                    "store_seo": [],
                    "dokan_store_time_enabled": "no",
                    "dokan_store_open_notice": "",
                    "dokan_store_close_notice": ""
                }
            },
            {
                "id": 446,
                "key": "dokan_publishing",
                "value": "no"
            },
            {
                "id": 447,
                "key": "dokan_admin_percentage",
                "value": ""
            },
            {
                "id": 448,
                "key": "dokan_admin_percentage_type",
                "value": "flat"
            },
            {
                "id": 449,
                "key": "dokan_feature_seller",
                "value": "no"
            },
            {
                "id": 450,
                "key": "dokan_store_name",
                "value": ""
            }
        ],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/2"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers"
                }
            ]
        }
    },
    {
        "id": 15,
        "date_created": "2024-01-23T09:11:52",
        "date_created_gmt": "2024-01-23T09:11:52",
        "date_modified": "2024-01-31T13:33:27",
        "date_modified_gmt": "2024-01-31T13:33:27",
        "email": "pme@test.com",
        "first_name": "pme",
        "last_name": "",
        "role": "customer",
        "username": "pme",
        "billing": {
            "first_name": "Pm",
            "last_name": "pm",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Goma",
            "postcode": "0091",
            "country": "CD",
            "state": "NK",
            "email": "pme@test.com",
            "phone": ""
        },
        "shipping": {
            "first_name": "Pm",
            "last_name": "pm",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Goma",
            "postcode": "0091",
            "country": "CD",
            "state": "NK",
            "phone": ""
        },
        "is_paying_customer": false,
        "avatar_url": "https://secure.gravatar.com/avatar/9a12fa86b534895c3e5976f7dd6f9dc8?s=96&d=mm&r=g",
        "meta_data": [
            {
                "id": 535,
                "key": "vat_number",
                "value": ""
            },
            {
                "id": 557,
                "key": "texty_phone",
                "value": "+243891878633"
            },
            {
                "id": 559,
                "key": "wc_last_active",
                "value": "1706659200"
            },
            {
                "id": 562,
                "key": "screen_layout_inspire_invoice",
                "value": "1"
            },
            {
                "id": 564,
                "key": "jetpack_tracks_anon_id",
                "value": "jetpack:JpU5l/OUBzcZwaUJVsA1f029"
            }
        ],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/15"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers"
                }
            ]
        }
    },
    {
        "id": 17,
        "date_created": "2024-01-23T09:49:55",
        "date_created_gmt": "2024-01-23T09:49:55",
        "date_modified": "2024-01-23T09:49:55",
        "date_modified_gmt": "2024-01-23T09:49:55",
        "email": "pme@test.com4",
        "first_name": "pme4",
        "last_name": "",
        "role": "customer",
        "username": "pme-2416",
        "billing": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "email": "",
            "phone": ""
        },
        "shipping": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "phone": ""
        },
        "is_paying_customer": false,
        "avatar_url": "https://secure.gravatar.com/avatar/81104cf5325a3cdfb49afbafade31317?s=96&d=mm&r=g",
        "meta_data": [],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/17"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers"
                }
            ]
        }
    },
    {
        "id": 16,
        "date_created": "2024-01-23T09:16:24",
        "date_created_gmt": "2024-01-23T09:16:24",
        "date_modified": "2024-01-23T09:16:24",
        "date_modified_gmt": "2024-01-23T09:16:24",
        "email": "pme@test.com2",
        "first_name": "pme2",
        "last_name": "",
        "role": "customer",
        "username": "pme-8351",
        "billing": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "email": "",
            "phone": ""
        },
        "shipping": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "phone": ""
        },
        "is_paying_customer": false,
        "avatar_url": "https://secure.gravatar.com/avatar/cdc787002af36ccdeb7a1e22f301ff49?s=96&d=mm&r=g",
        "meta_data": [],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/16"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers"
                }
            ]
        }
    },
    {
        "id": 13,
        "date_created": "2024-01-23T08:58:27",
        "date_created_gmt": "2024-01-23T08:58:27",
        "date_modified": "2024-01-23T08:58:27",
        "date_modified_gmt": "2024-01-23T08:58:27",
        "email": "test@user.com",
        "first_name": "",
        "last_name": "",
        "role": "customer",
        "username": "testuser",
        "billing": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "email": "",
            "phone": ""
        },
        "shipping": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "phone": ""
        },
        "is_paying_customer": false,
        "avatar_url": "https://secure.gravatar.com/avatar/d5bb4ffffa6a32428c7e310c341b4f7b?s=96&d=mm&r=g",
        "meta_data": [],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/13"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers"
                }
            ]
        }
    },
    {
        "id": 14,
        "date_created": "2024-01-23T09:01:55",
        "date_created_gmt": "2024-01-23T09:01:55",
        "date_modified": "2024-01-23T09:01:56",
        "date_modified_gmt": "2024-01-23T09:01:56",
        "email": "test@user.com2",
        "first_name": "",
        "last_name": "",
        "role": "customer",
        "username": "testuser2",
        "billing": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "email": "",
            "phone": ""
        },
        "shipping": {
            "first_name": "",
            "last_name": "",
            "company": "",
            "address_1": "",
            "address_2": "",
            "city": "",
            "postcode": "",
            "country": "",
            "state": "",
            "phone": ""
        },
        "is_paying_customer": false,
        "avatar_url": "https://secure.gravatar.com/avatar/07ba243a1ffe76bf459625f2a37524fe?s=96&d=mm&r=g",
        "meta_data": [],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/14"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers"
                }
            ]
        }
    }
]);
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
