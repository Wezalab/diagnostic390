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
  const [commandes, setCommandes]= useState(
    [
    {
        "id": 432,
        "parent_id": 428,
        "status": "processing",
        "currency": "USD",
        "version": "8.5.2",
        "prices_include_tax": false,
        "date_created": "2024-01-31T14:39:57",
        "date_modified": "2024-01-31T15:32:10",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "0.00",
        "shipping_tax": "0.00",
        "cart_tax": "0.00",
        "total": "287.50",
        "total_tax": "0.00",
        "customer_id": 20,
        "order_key": "wc_order_3YdPTgAMqrwpO",
        "billing": {
            "first_name": "Jean",
            "last_name": "jean",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Kinshasa",
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
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
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
            "phone": ""
        },
        "payment_method": "",
        "payment_method_title": "",
        "transaction_id": "",
        "customer_ip_address": "196.250.112.207",
        "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "created_via": "dokan",
        "customer_note": "",
        "date_completed": null,
        "date_paid": "2024-01-31T15:32:10",
        "cart_hash": "69184aaad44b5fe8015e980358d4f889",
        "number": "432",
        "meta_data": [
            {
                "id": 163,
                "key": "_dokan_vendor_id",
                "value": "19"
            },
            {
                "id": 166,
                "key": "_wc_order_attribution_source_type",
                "value": "admin"
            },
            {
                "id": 167,
                "key": "shipping_fee_recipient",
                "value": "seller"
            },
            {
                "id": 168,
                "key": "tax_fee_recipient",
                "value": "seller"
            },
            {
                "id": 169,
                "key": "shipping_tax_fee_recipient",
                "value": "seller"
            }
        ],
        "line_items": [
            {
                "id": 60,
                "name": "Bath & Handwash",
                "product_id": 310,
                "variation_id": 0,
                "quantity": 3,
                "tax_class": "zero-rate",
                "subtotal": "127.50",
                "subtotal_tax": "0.00",
                "total": "127.50",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 489,
                        "key": "_reduced_stock",
                        "value": "3",
                        "display_key": "_reduced_stock",
                        "display_value": "3"
                    },
                    {
                        "id": 506,
                        "key": "_dokan_commission_rate",
                        "value": "10",
                        "display_key": "_dokan_commission_rate",
                        "display_value": "10"
                    },
                    {
                        "id": 507,
                        "key": "_dokan_commission_type",
                        "value": "percentage",
                        "display_key": "_dokan_commission_type",
                        "display_value": "percentage"
                    },
                    {
                        "id": 508,
                        "key": "_dokan_additional_fee",
                        "value": "0",
                        "display_key": "_dokan_additional_fee",
                        "display_value": "0"
                    }
                ],
                "sku": "",
                "price": 42.5,
                "image": {
                    "id": "102",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/bath-handwash.png"
                },
                "parent_name": null
            },
            {
                "id": 61,
                "name": "Machine a coudre",
                "product_id": 74,
                "variation_id": 0,
                "quantity": 2,
                "tax_class": "",
                "subtotal": "160.00",
                "subtotal_tax": "0.00",
                "total": "160.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 509,
                        "key": "_dokan_commission_rate",
                        "value": "10",
                        "display_key": "_dokan_commission_rate",
                        "display_value": "10"
                    },
                    {
                        "id": 510,
                        "key": "_dokan_commission_type",
                        "value": "percentage",
                        "display_key": "_dokan_commission_type",
                        "display_value": "percentage"
                    },
                    {
                        "id": 511,
                        "key": "_dokan_additional_fee",
                        "value": "0",
                        "display_key": "_dokan_additional_fee",
                        "display_value": "0"
                    }
                ],
                "sku": "Machine",
                "price": 80,
                "image": {
                    "id": "77",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/71ovE9ROJL._AC_CR0000_SX615_SY462_.jpg"
                },
                "parent_name": null
            }
        ],
        "tax_lines": [],
        "shipping_lines": [
            {
                "id": 62,
                "method_title": "Free shipping",
                "method_id": "free_shipping",
                "instance_id": "",
                "total": "0.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 504,
                        "key": "Articles",
                        "value": "Bath & Handwash &times; 3, Machine a coudre &times; 2",
                        "display_key": "Articles",
                        "display_value": "Bath &amp; Handwash &times; 3, Machine a coudre &times; 2"
                    },
                    {
                        "id": 505,
                        "key": "seller_id",
                        "value": "19",
                        "display_key": "seller_id",
                        "display_value": "19"
                    }
                ]
            }
        ],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/432/?pay_for_order=true&key=wc_order_3YdPTgAMqrwpO",
        "is_editable": false,
        "needs_payment": false,
        "needs_processing": true,
        "date_created_gmt": "2024-01-31T14:39:57",
        "date_modified_gmt": "2024-01-31T15:32:10",
        "date_completed_gmt": null,
        "date_paid_gmt": "2024-01-31T15:32:10",
        "currency_symbol": "$",
        "stores": [
            {
                "id": 19,
                "name": "psd",
                "shop_name": "Emart",
                "url": "https://central-achat.alphanewgroup.com/store/psd/",
                "address": {
                    "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
                    "street_2": "",
                    "city": "Kinshasa",
                    "zip": "",
                    "country": "CD",
                    "state": ""
                }
            }
        ],
        "store": {
            "id": 19,
            "name": "psd",
            "shop_name": "Emart",
            "url": "https://central-achat.alphanewgroup.com/store/psd/",
            "address": {
                "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
                "street_2": "",
                "city": "Kinshasa",
                "zip": "",
                "country": "CD",
                "state": ""
            }
        },
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/432"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
                }
            ],
            "customer": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
                }
            ],
            "up": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/428"
                }
            ]
        }
    },
    {
        "id": 431,
        "parent_id": 428,
        "status": "processing",
        "currency": "USD",
        "version": "8.5.2",
        "prices_include_tax": false,
        "date_created": "2024-01-31T14:39:56",
        "date_modified": "2024-01-31T15:32:10",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "0.00",
        "shipping_tax": "0.00",
        "cart_tax": "0.00",
        "total": "15.00",
        "total_tax": "0.00",
        "customer_id": 20,
        "order_key": "wc_order_EbBXORBwfgQUT",
        "billing": {
            "first_name": "Jean",
            "last_name": "jean",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Kinshasa",
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
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
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
            "phone": ""
        },
        "payment_method": "",
        "payment_method_title": "",
        "transaction_id": "",
        "customer_ip_address": "196.250.112.207",
        "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "created_via": "dokan",
        "customer_note": "",
        "date_completed": null,
        "date_paid": "2024-01-31T15:32:10",
        "cart_hash": "69184aaad44b5fe8015e980358d4f889",
        "number": "431",
        "meta_data": [
            {
                "id": 156,
                "key": "_dokan_vendor_id",
                "value": "1"
            },
            {
                "id": 159,
                "key": "_wc_order_attribution_source_type",
                "value": "admin"
            },
            {
                "id": 160,
                "key": "shipping_fee_recipient",
                "value": "seller"
            },
            {
                "id": 161,
                "key": "tax_fee_recipient",
                "value": "seller"
            },
            {
                "id": 162,
                "key": "shipping_tax_fee_recipient",
                "value": "seller"
            }
        ],
        "line_items": [
            {
                "id": 58,
                "name": "alfajiri",
                "product_id": 410,
                "variation_id": 0,
                "quantity": 1,
                "tax_class": "",
                "subtotal": "15.00",
                "subtotal_tax": "0.00",
                "total": "15.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 469,
                        "key": "_reduced_stock",
                        "value": "1",
                        "display_key": "_reduced_stock",
                        "display_value": "1"
                    },
                    {
                        "id": 477,
                        "key": "_dokan_commission_rate",
                        "value": "10",
                        "display_key": "_dokan_commission_rate",
                        "display_value": "10"
                    },
                    {
                        "id": 478,
                        "key": "_dokan_commission_type",
                        "value": "percentage",
                        "display_key": "_dokan_commission_type",
                        "display_value": "percentage"
                    },
                    {
                        "id": 479,
                        "key": "_dokan_additional_fee",
                        "value": "0",
                        "display_key": "_dokan_additional_fee",
                        "display_value": "0"
                    }
                ],
                "sku": "",
                "price": 15,
                "image": {
                    "id": "409",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/a6oxyyqn5llazlueufjv.jpg"
                },
                "parent_name": null
            }
        ],
        "tax_lines": [],
        "shipping_lines": [
            {
                "id": 59,
                "method_title": "Free shipping",
                "method_id": "free_shipping",
                "instance_id": "",
                "total": "0.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 475,
                        "key": "Articles",
                        "value": "alfajiri &times; 1",
                        "display_key": "Articles",
                        "display_value": "alfajiri &times; 1"
                    },
                    {
                        "id": 476,
                        "key": "seller_id",
                        "value": "1",
                        "display_key": "seller_id",
                        "display_value": "1"
                    }
                ]
            }
        ],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/431/?pay_for_order=true&key=wc_order_EbBXORBwfgQUT",
        "is_editable": false,
        "needs_payment": false,
        "needs_processing": true,
        "date_created_gmt": "2024-01-31T14:39:56",
        "date_modified_gmt": "2024-01-31T15:32:10",
        "date_completed_gmt": null,
        "date_paid_gmt": "2024-01-31T15:32:10",
        "currency_symbol": "$",
        "stores": [
            {
                "id": 1,
                "name": "admin",
                "shop_name": "Cirezi Food",
                "url": "https://central-achat.alphanewgroup.com/store/admin/",
                "address": {
                    "street_1": "Goma",
                    "street_2": "Himbi",
                    "city": "Goma",
                    "zip": "61",
                    "country": "CD",
                    "state": "Nord Kivu"
                }
            }
        ],
        "store": {
            "id": 1,
            "name": "admin",
            "shop_name": "Cirezi Food",
            "url": "https://central-achat.alphanewgroup.com/store/admin/",
            "address": {
                "street_1": "Goma",
                "street_2": "Himbi",
                "city": "Goma",
                "zip": "61",
                "country": "CD",
                "state": "Nord Kivu"
            }
        },
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/431"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
                }
            ],
            "customer": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
                }
            ],
            "up": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/428"
                }
            ]
        }
    },
    {
        "id": 429,
        "parent_id": 0,
        "status": "processing",
        "currency": "USD",
        "version": "8.5.2",
        "prices_include_tax": false,
        "date_created": "2024-01-31T13:24:19",
        "date_modified": "2024-01-31T13:33:28",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "0.00",
        "shipping_tax": "0.00",
        "cart_tax": "0.00",
        "total": "250.00",
        "total_tax": "0.00",
        "customer_id": 15,
        "order_key": "wc_order_Pt6s3EnUcLT3l",
        "billing": {
            "first_name": "Pm",
            "last_name": "pm",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Goma",
            "state": "NK",
            "postcode": "0091",
            "country": "CD",
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
            "state": "NK",
            "postcode": "0091",
            "country": "CD",
            "phone": ""
        },
        "payment_method": "cod",
        "payment_method_title": "Cash on delivery",
        "transaction_id": "",
        "customer_ip_address": "196.250.112.207",
        "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "created_via": "store-api",
        "customer_note": "",
        "date_completed": null,
        "date_paid": null,
        "cart_hash": "146a0e2b429205d00f5b7259434cf928",
        "number": "429",
        "meta_data": [
            {
                "id": 136,
                "key": "_shipping_hash",
                "value": "9d4568c009d203ab10e33ea9953a0264"
            },
            {
                "id": 137,
                "key": "_coupons_hash",
                "value": "d751713988987e9331980363e24189ce"
            },
            {
                "id": 138,
                "key": "_fees_hash",
                "value": "d751713988987e9331980363e24189ce"
            },
            {
                "id": 139,
                "key": "_taxes_hash",
                "value": "d751713988987e9331980363e24189ce"
            },
            {
                "id": 140,
                "key": "is_vat_exempt",
                "value": "no"
            },
            {
                "id": 143,
                "key": "_wc_order_attribution_source_type",
                "value": "typein"
            },
            {
                "id": 144,
                "key": "_wc_order_attribution_utm_source",
                "value": "(direct)"
            },
            {
                "id": 145,
                "key": "_wc_order_attribution_session_entry",
                "value": "https://central-achat.alphanewgroup.com/"
            },
            {
                "id": 146,
                "key": "_wc_order_attribution_session_start_time",
                "value": "2024-01-31 13:17:10"
            },
            {
                "id": 147,
                "key": "_wc_order_attribution_session_pages",
                "value": "7"
            },
            {
                "id": 148,
                "key": "_wc_order_attribution_session_count",
                "value": "1"
            },
            {
                "id": 149,
                "key": "_wc_order_attribution_user_agent",
                "value": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
            },
            {
                "id": 150,
                "key": "_wc_order_attribution_device_type",
                "value": "Desktop"
            },
            {
                "id": 151,
                "key": "_dokan_vendor_id",
                "value": "19"
            },
            {
                "id": 152,
                "key": "shipping_fee_recipient",
                "value": "seller"
            },
            {
                "id": 153,
                "key": "tax_fee_recipient",
                "value": "seller"
            },
            {
                "id": 154,
                "key": "shipping_tax_fee_recipient",
                "value": "seller"
            }
        ],
        "line_items": [
            {
                "id": 48,
                "name": "Machine a coudre",
                "product_id": 74,
                "variation_id": 0,
                "quantity": 3,
                "tax_class": "",
                "subtotal": "240.00",
                "subtotal_tax": "0.00",
                "total": "240.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 451,
                        "key": "_dokan_commission_rate",
                        "value": "10",
                        "display_key": "_dokan_commission_rate",
                        "display_value": "10"
                    },
                    {
                        "id": 452,
                        "key": "_dokan_commission_type",
                        "value": "percentage",
                        "display_key": "_dokan_commission_type",
                        "display_value": "percentage"
                    },
                    {
                        "id": 453,
                        "key": "_dokan_additional_fee",
                        "value": "0",
                        "display_key": "_dokan_additional_fee",
                        "display_value": "0"
                    }
                ],
                "sku": "Machine",
                "price": 80,
                "image": {
                    "id": "77",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/71ovE9ROJL._AC_CR0000_SX615_SY462_.jpg"
                },
                "parent_name": null
            },
            {
                "id": 49,
                "name": "EASTPAK Padded Pak'R Sac à Dos",
                "product_id": 423,
                "variation_id": 0,
                "quantity": 2,
                "tax_class": "",
                "subtotal": "10.00",
                "subtotal_tax": "0.00",
                "total": "10.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 454,
                        "key": "_dokan_commission_rate",
                        "value": "10",
                        "display_key": "_dokan_commission_rate",
                        "display_value": "10"
                    },
                    {
                        "id": 455,
                        "key": "_dokan_commission_type",
                        "value": "percentage",
                        "display_key": "_dokan_commission_type",
                        "display_value": "percentage"
                    },
                    {
                        "id": 456,
                        "key": "_dokan_additional_fee",
                        "value": "0",
                        "display_key": "_dokan_additional_fee",
                        "display_value": "0"
                    },
                    {
                        "id": 457,
                        "key": "_reduced_stock",
                        "value": "2",
                        "display_key": "_reduced_stock",
                        "display_value": "2"
                    }
                ],
                "sku": "",
                "price": 5,
                "image": {
                    "id": "422",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/grfjjoipwtwcte7u2yew.jpg"
                },
                "parent_name": null
            }
        ],
        "tax_lines": [],
        "shipping_lines": [
            {
                "id": 57,
                "method_title": "Free shipping",
                "method_id": "free_shipping",
                "instance_id": "1",
                "total": "0.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 449,
                        "key": "Articles",
                        "value": "Machine a coudre &times; 3, EASTPAK Padded Pak'R Sac à Dos &times; 2",
                        "display_key": "Articles",
                        "display_value": "Machine a coudre &times; 3, EASTPAK Padded Pak'R Sac à Dos &times; 2"
                    },
                    {
                        "id": 450,
                        "key": "seller_id",
                        "value": "19",
                        "display_key": "seller_id",
                        "display_value": "19"
                    }
                ]
            }
        ],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/429/?pay_for_order=true&key=wc_order_Pt6s3EnUcLT3l",
        "is_editable": false,
        "needs_payment": false,
        "needs_processing": true,
        "date_created_gmt": "2024-01-31T13:24:19",
        "date_modified_gmt": "2024-01-31T13:33:28",
        "date_completed_gmt": null,
        "date_paid_gmt": null,
        "currency_symbol": "$",
        "stores": [
            {
                "id": 19,
                "name": "psd",
                "shop_name": "Emart",
                "url": "https://central-achat.alphanewgroup.com/store/psd/",
                "address": {
                    "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
                    "street_2": "",
                    "city": "Kinshasa",
                    "zip": "",
                    "country": "CD",
                    "state": ""
                }
            }
        ],
        "store": {
            "id": 19,
            "name": "psd",
            "shop_name": "Emart",
            "url": "https://central-achat.alphanewgroup.com/store/psd/",
            "address": {
                "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
                "street_2": "",
                "city": "Kinshasa",
                "zip": "",
                "country": "CD",
                "state": ""
            }
        },
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/429"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
                }
            ],
            "customer": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/15"
                }
            ]
        }
    },
    {
        "id": 428,
        "parent_id": 0,
        "status": "processing",
        "currency": "USD",
        "version": "8.5.2",
        "prices_include_tax": false,
        "date_created": "2024-01-31T13:14:25",
        "date_modified": "2024-01-31T15:32:10",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "0.00",
        "shipping_tax": "0.00",
        "cart_tax": "0.00",
        "total": "302.50",
        "total_tax": "0.00",
        "customer_id": 20,
        "order_key": "wc_order_hJsO0zCVPcQ4f",
        "billing": {
            "first_name": "Jean",
            "last_name": "jean",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Kinshasa",
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
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
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
            "phone": ""
        },
        "payment_method": "",
        "payment_method_title": "",
        "transaction_id": "",
        "customer_ip_address": "196.250.112.207",
        "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "created_via": "store-api",
        "customer_note": "",
        "date_completed": null,
        "date_paid": "2024-01-31T15:32:10",
        "cart_hash": "69184aaad44b5fe8015e980358d4f889",
        "number": "428",
        "meta_data": [
            {
                "id": 129,
                "key": "_shipping_hash",
                "value": "9d4568c009d203ab10e33ea9953a0264"
            },
            {
                "id": 130,
                "key": "_coupons_hash",
                "value": "d751713988987e9331980363e24189ce"
            },
            {
                "id": 131,
                "key": "_fees_hash",
                "value": "d751713988987e9331980363e24189ce"
            },
            {
                "id": 132,
                "key": "_taxes_hash",
                "value": "d751713988987e9331980363e24189ce"
            },
            {
                "id": 133,
                "key": "is_vat_exempt",
                "value": "no"
            },
            {
                "id": 155,
                "key": "has_sub_order",
                "value": "1"
            }
        ],
        "line_items": [
            {
                "id": 43,
                "name": "alfajiri",
                "product_id": 410,
                "variation_id": 0,
                "quantity": 1,
                "tax_class": "",
                "subtotal": "15.00",
                "subtotal_tax": "0.00",
                "total": "15.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 458,
                        "key": "_reduced_stock",
                        "value": "1",
                        "display_key": "_reduced_stock",
                        "display_value": "1"
                    }
                ],
                "sku": "",
                "price": 15,
                "image": {
                    "id": "409",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/a6oxyyqn5llazlueufjv.jpg"
                },
                "parent_name": null
            },
            {
                "id": 44,
                "name": "Bath & Handwash",
                "product_id": 310,
                "variation_id": 0,
                "quantity": 3,
                "tax_class": "zero-rate",
                "subtotal": "127.50",
                "subtotal_tax": "0.00",
                "total": "127.50",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 459,
                        "key": "_reduced_stock",
                        "value": "3",
                        "display_key": "_reduced_stock",
                        "display_value": "3"
                    }
                ],
                "sku": "",
                "price": 42.5,
                "image": {
                    "id": "102",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/bath-handwash.png"
                },
                "parent_name": null
            },
            {
                "id": 45,
                "name": "Machine a coudre",
                "product_id": 74,
                "variation_id": 0,
                "quantity": 2,
                "tax_class": "",
                "subtotal": "160.00",
                "subtotal_tax": "0.00",
                "total": "160.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [],
                "sku": "Machine",
                "price": 80,
                "image": {
                    "id": "77",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/71ovE9ROJL._AC_CR0000_SX615_SY462_.jpg"
                },
                "parent_name": null
            }
        ],
        "tax_lines": [],
        "shipping_lines": [
            {
                "id": 46,
                "method_title": "Free shipping",
                "method_id": "free_shipping",
                "instance_id": "1",
                "total": "0.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 368,
                        "key": "Articles",
                        "value": "alfajiri &times; 1",
                        "display_key": "Articles",
                        "display_value": "alfajiri &times; 1"
                    },
                    {
                        "id": 369,
                        "key": "seller_id",
                        "value": "1",
                        "display_key": "seller_id",
                        "display_value": "1"
                    }
                ]
            },
            {
                "id": 47,
                "method_title": "Free shipping",
                "method_id": "free_shipping",
                "instance_id": "1",
                "total": "0.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 375,
                        "key": "Articles",
                        "value": "Bath & Handwash &times; 3, Machine a coudre &times; 2",
                        "display_key": "Articles",
                        "display_value": "Bath &amp; Handwash &times; 3, Machine a coudre &times; 2"
                    },
                    {
                        "id": 376,
                        "key": "seller_id",
                        "value": "19",
                        "display_key": "seller_id",
                        "display_value": "19"
                    }
                ]
            }
        ],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/428/?pay_for_order=true&key=wc_order_hJsO0zCVPcQ4f",
        "is_editable": false,
        "needs_payment": false,
        "needs_processing": true,
        "date_created_gmt": "2024-01-31T13:14:25",
        "date_modified_gmt": "2024-01-31T15:32:10",
        "date_completed_gmt": null,
        "date_paid_gmt": "2024-01-31T15:32:10",
        "currency_symbol": "$",
        "stores": [
            {
                "id": 1,
                "name": "admin",
                "shop_name": "Cirezi Food",
                "url": "https://central-achat.alphanewgroup.com/store/admin/",
                "address": {
                    "street_1": "Goma",
                    "street_2": "Himbi",
                    "city": "Goma",
                    "zip": "61",
                    "country": "CD",
                    "state": "Nord Kivu"
                }
            },
            {
                "id": 19,
                "name": "psd",
                "shop_name": "Emart",
                "url": "https://central-achat.alphanewgroup.com/store/psd/",
                "address": {
                    "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
                    "street_2": "",
                    "city": "Kinshasa",
                    "zip": "",
                    "country": "CD",
                    "state": ""
                }
            }
        ],
        "store": [],
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/428"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
                }
            ],
            "customer": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
                }
            ]
        }
    },
    {
        "id": 427,
        "parent_id": 0,
        "status": "processing",
        "currency": "USD",
        "version": "8.5.2",
        "prices_include_tax": false,
        "date_created": "2024-01-31T13:03:00",
        "date_modified": "2024-01-31T13:12:53",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "0.00",
        "shipping_tax": "0.00",
        "cart_tax": "0.00",
        "total": "5.00",
        "total_tax": "0.00",
        "customer_id": 20,
        "order_key": "wc_order_b9ofMG1ZsCczx",
        "billing": {
            "first_name": "Jean",
            "last_name": "jean",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Kinshasa",
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
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
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
            "phone": ""
        },
        "payment_method": "cod",
        "payment_method_title": "Cash on delivery",
        "transaction_id": "",
        "customer_ip_address": "196.250.112.207",
        "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "created_via": "store-api",
        "customer_note": "",
        "date_completed": null,
        "date_paid": null,
        "cart_hash": "b09657bde71df38a1722e0c0204ebe32",
        "number": "427",
        "meta_data": [
            {
                "id": 110,
                "key": "_shipping_hash",
                "value": "9d4568c009d203ab10e33ea9953a0264"
            },
            {
                "id": 111,
                "key": "_coupons_hash",
                "value": "d751713988987e9331980363e24189ce"
            },
            {
                "id": 112,
                "key": "_fees_hash",
                "value": "d751713988987e9331980363e24189ce"
            },
            {
                "id": 113,
                "key": "_taxes_hash",
                "value": "d751713988987e9331980363e24189ce"
            },
            {
                "id": 114,
                "key": "is_vat_exempt",
                "value": "no"
            },
            {
                "id": 117,
                "key": "_wc_order_attribution_source_type",
                "value": "typein"
            },
            {
                "id": 118,
                "key": "_wc_order_attribution_utm_source",
                "value": "(direct)"
            },
            {
                "id": 119,
                "key": "_wc_order_attribution_session_entry",
                "value": "https://central-achat.alphanewgroup.com/"
            },
            {
                "id": 120,
                "key": "_wc_order_attribution_session_start_time",
                "value": "2024-01-31 13:01:28"
            },
            {
                "id": 121,
                "key": "_wc_order_attribution_session_pages",
                "value": "5"
            },
            {
                "id": 122,
                "key": "_wc_order_attribution_session_count",
                "value": "1"
            },
            {
                "id": 123,
                "key": "_wc_order_attribution_user_agent",
                "value": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
            },
            {
                "id": 124,
                "key": "_wc_order_attribution_device_type",
                "value": "Desktop"
            },
            {
                "id": 125,
                "key": "_dokan_vendor_id",
                "value": "19"
            },
            {
                "id": 126,
                "key": "shipping_fee_recipient",
                "value": "seller"
            },
            {
                "id": 127,
                "key": "tax_fee_recipient",
                "value": "seller"
            },
            {
                "id": 128,
                "key": "shipping_tax_fee_recipient",
                "value": "seller"
            }
        ],
        "line_items": [
            {
                "id": 39,
                "name": "EASTPAK Padded Pak'R Sac à Dos",
                "product_id": 423,
                "variation_id": 0,
                "quantity": 1,
                "tax_class": "",
                "subtotal": "5.00",
                "subtotal_tax": "0.00",
                "total": "5.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 332,
                        "key": "_dokan_commission_rate",
                        "value": "10",
                        "display_key": "_dokan_commission_rate",
                        "display_value": "10"
                    },
                    {
                        "id": 333,
                        "key": "_dokan_commission_type",
                        "value": "percentage",
                        "display_key": "_dokan_commission_type",
                        "display_value": "percentage"
                    },
                    {
                        "id": 334,
                        "key": "_dokan_additional_fee",
                        "value": "0",
                        "display_key": "_dokan_additional_fee",
                        "display_value": "0"
                    },
                    {
                        "id": 335,
                        "key": "_reduced_stock",
                        "value": "1",
                        "display_key": "_reduced_stock",
                        "display_value": "1"
                    }
                ],
                "sku": "",
                "price": 5,
                "image": {
                    "id": "422",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/grfjjoipwtwcte7u2yew.jpg"
                },
                "parent_name": null
            }
        ],
        "tax_lines": [],
        "shipping_lines": [
            {
                "id": 42,
                "method_title": "Free shipping",
                "method_id": "free_shipping",
                "instance_id": "1",
                "total": "0.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 330,
                        "key": "Articles",
                        "value": "EASTPAK Padded Pak'R Sac à Dos &times; 1",
                        "display_key": "Articles",
                        "display_value": "EASTPAK Padded Pak'R Sac à Dos &times; 1"
                    },
                    {
                        "id": 331,
                        "key": "seller_id",
                        "value": "19",
                        "display_key": "seller_id",
                        "display_value": "19"
                    }
                ]
            }
        ],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/427/?pay_for_order=true&key=wc_order_b9ofMG1ZsCczx",
        "is_editable": false,
        "needs_payment": false,
        "needs_processing": true,
        "date_created_gmt": "2024-01-31T13:03:00",
        "date_modified_gmt": "2024-01-31T13:12:53",
        "date_completed_gmt": null,
        "date_paid_gmt": null,
        "currency_symbol": "$",
        "stores": [
            {
                "id": 19,
                "name": "psd",
                "shop_name": "Emart",
                "url": "https://central-achat.alphanewgroup.com/store/psd/",
                "address": {
                    "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
                    "street_2": "",
                    "city": "Kinshasa",
                    "zip": "",
                    "country": "CD",
                    "state": ""
                }
            }
        ],
        "store": {
            "id": 19,
            "name": "psd",
            "shop_name": "Emart",
            "url": "https://central-achat.alphanewgroup.com/store/psd/",
            "address": {
                "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
                "street_2": "",
                "city": "Kinshasa",
                "zip": "",
                "country": "CD",
                "state": ""
            }
        },
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/427"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
                }
            ],
            "customer": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
                }
            ]
        }
    },
    {
        "id": 331,
        "parent_id": 0,
        "status": "processing",
        "currency": "USD",
        "version": "8.5.2",
        "prices_include_tax": false,
        "date_created": "2024-01-31T14:39:56",
        "date_modified": "2024-01-31T15:32:10",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "0.00",
        "shipping_tax": "0.00",
        "cart_tax": "0.00",
        "total": "15.00",
        "total_tax": "0.00",
        "customer_id": 20,
        "order_key": "wc_order_EbBXORBwfgQUT",
        "billing": {
            "first_name": "Jean",
            "last_name": "jean",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Kinshasa",
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
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
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
            "phone": ""
        },
        "payment_method": "",
        "payment_method_title": "",
        "transaction_id": "",
        "customer_ip_address": "196.250.112.207",
        "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "created_via": "dokan",
        "customer_note": "",
        "date_completed": null,
        "date_paid": "2024-01-31T15:32:10",
        "cart_hash": "69184aaad44b5fe8015e980358d4f889",
        "number": "431",
        "meta_data": [
            {
                "id": 156,
                "key": "_dokan_vendor_id",
                "value": "1"
            },
            {
                "id": 159,
                "key": "_wc_order_attribution_source_type",
                "value": "admin"
            },
            {
                "id": 160,
                "key": "shipping_fee_recipient",
                "value": "seller"
            },
            {
                "id": 161,
                "key": "tax_fee_recipient",
                "value": "seller"
            },
            {
                "id": 162,
                "key": "shipping_tax_fee_recipient",
                "value": "seller"
            }
        ],
        "line_items": [
            {
                "id": 58,
                "name": "alfajiri",
                "product_id": 410,
                "variation_id": 0,
                "quantity": 1,
                "tax_class": "",
                "subtotal": "15.00",
                "subtotal_tax": "0.00",
                "total": "15.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 469,
                        "key": "_reduced_stock",
                        "value": "1",
                        "display_key": "_reduced_stock",
                        "display_value": "1"
                    },
                    {
                        "id": 477,
                        "key": "_dokan_commission_rate",
                        "value": "10",
                        "display_key": "_dokan_commission_rate",
                        "display_value": "10"
                    },
                    {
                        "id": 478,
                        "key": "_dokan_commission_type",
                        "value": "percentage",
                        "display_key": "_dokan_commission_type",
                        "display_value": "percentage"
                    },
                    {
                        "id": 479,
                        "key": "_dokan_additional_fee",
                        "value": "0",
                        "display_key": "_dokan_additional_fee",
                        "display_value": "0"
                    }
                ],
                "sku": "",
                "price": 15,
                "image": {
                    "id": "409",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/a6oxyyqn5llazlueufjv.jpg"
                },
                "parent_name": null
            }
        ],
        "tax_lines": [],
        "shipping_lines": [
            {
                "id": 59,
                "method_title": "Free shipping",
                "method_id": "free_shipping",
                "instance_id": "",
                "total": "0.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 475,
                        "key": "Articles",
                        "value": "alfajiri &times; 1",
                        "display_key": "Articles",
                        "display_value": "alfajiri &times; 1"
                    },
                    {
                        "id": 476,
                        "key": "seller_id",
                        "value": "1",
                        "display_key": "seller_id",
                        "display_value": "1"
                    }
                ]
            }
        ],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/431/?pay_for_order=true&key=wc_order_EbBXORBwfgQUT",
        "is_editable": false,
        "needs_payment": false,
        "needs_processing": true,
        "date_created_gmt": "2024-01-31T14:39:56",
        "date_modified_gmt": "2024-01-31T15:32:10",
        "date_completed_gmt": null,
        "date_paid_gmt": "2024-01-31T15:32:10",
        "currency_symbol": "$",
        "stores": [
            {
                "id": 1,
                "name": "admin",
                "shop_name": "Cirezi Food",
                "url": "https://central-achat.alphanewgroup.com/store/admin/",
                "address": {
                    "street_1": "Goma",
                    "street_2": "Himbi",
                    "city": "Goma",
                    "zip": "61",
                    "country": "CD",
                    "state": "Nord Kivu"
                }
            }
        ],
        "store": {
            "id": 1,
            "name": "admin",
            "shop_name": "Cirezi Food",
            "url": "https://central-achat.alphanewgroup.com/store/admin/",
            "address": {
                "street_1": "Goma",
                "street_2": "Himbi",
                "city": "Goma",
                "zip": "61",
                "country": "CD",
                "state": "Nord Kivu"
            }
        },
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/431"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
                }
            ],
            "customer": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
                }
            ],
            "up": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/428"
                }
            ]
        }
    },
    {
        "id": 471,
        "parent_id": 331,
        "status": "processing",
        "currency": "USD",
        "version": "8.5.2",
        "prices_include_tax": false,
        "date_created": "2024-01-31T14:39:56",
        "date_modified": "2024-01-31T15:32:10",
        "discount_total": "0.00",
        "discount_tax": "0.00",
        "shipping_total": "0.00",
        "shipping_tax": "0.00",
        "cart_tax": "0.00",
        "total": "15.00",
        "total_tax": "0.00",
        "customer_id": 20,
        "order_key": "wc_order_EbBXORBwfgQUT",
        "billing": {
            "first_name": "Jean",
            "last_name": "jean",
            "company": "",
            "address_1": "12",
            "address_2": "",
            "city": "Kinshasa",
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
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
            "state": "RDC",
            "postcode": "061",
            "country": "CD",
            "phone": ""
        },
        "payment_method": "",
        "payment_method_title": "",
        "transaction_id": "",
        "customer_ip_address": "196.250.112.207",
        "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
        "created_via": "dokan",
        "customer_note": "",
        "date_completed": null,
        "date_paid": "2024-01-31T15:32:10",
        "cart_hash": "69184aaad44b5fe8015e980358d4f889",
        "number": "431",
        "meta_data": [
            {
                "id": 156,
                "key": "_dokan_vendor_id",
                "value": "1"
            },
            {
                "id": 159,
                "key": "_wc_order_attribution_source_type",
                "value": "admin"
            },
            {
                "id": 160,
                "key": "shipping_fee_recipient",
                "value": "seller"
            },
            {
                "id": 161,
                "key": "tax_fee_recipient",
                "value": "seller"
            },
            {
                "id": 162,
                "key": "shipping_tax_fee_recipient",
                "value": "seller"
            }
        ],
        "line_items": [
            {
                "id": 58,
                "name": "alfajiri",
                "product_id": 410,
                "variation_id": 0,
                "quantity": 1,
                "tax_class": "",
                "subtotal": "15.00",
                "subtotal_tax": "0.00",
                "total": "15.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 469,
                        "key": "_reduced_stock",
                        "value": "1",
                        "display_key": "_reduced_stock",
                        "display_value": "1"
                    },
                    {
                        "id": 477,
                        "key": "_dokan_commission_rate",
                        "value": "10",
                        "display_key": "_dokan_commission_rate",
                        "display_value": "10"
                    },
                    {
                        "id": 478,
                        "key": "_dokan_commission_type",
                        "value": "percentage",
                        "display_key": "_dokan_commission_type",
                        "display_value": "percentage"
                    },
                    {
                        "id": 479,
                        "key": "_dokan_additional_fee",
                        "value": "0",
                        "display_key": "_dokan_additional_fee",
                        "display_value": "0"
                    }
                ],
                "sku": "",
                "price": 15,
                "image": {
                    "id": "409",
                    "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/a6oxyyqn5llazlueufjv.jpg"
                },
                "parent_name": null
            }
        ],
        "tax_lines": [],
        "shipping_lines": [
            {
                "id": 59,
                "method_title": "Free shipping",
                "method_id": "free_shipping",
                "instance_id": "",
                "total": "0.00",
                "total_tax": "0.00",
                "taxes": [],
                "meta_data": [
                    {
                        "id": 475,
                        "key": "Articles",
                        "value": "alfajiri &times; 1",
                        "display_key": "Articles",
                        "display_value": "alfajiri &times; 1"
                    },
                    {
                        "id": 476,
                        "key": "seller_id",
                        "value": "1",
                        "display_key": "seller_id",
                        "display_value": "1"
                    }
                ]
            }
        ],
        "fee_lines": [],
        "coupon_lines": [],
        "refunds": [],
        "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/431/?pay_for_order=true&key=wc_order_EbBXORBwfgQUT",
        "is_editable": false,
        "needs_payment": false,
        "needs_processing": true,
        "date_created_gmt": "2024-01-31T14:39:56",
        "date_modified_gmt": "2024-01-31T15:32:10",
        "date_completed_gmt": null,
        "date_paid_gmt": "2024-01-31T15:32:10",
        "currency_symbol": "$",
        "stores": [
            {
                "id": 1,
                "name": "admin",
                "shop_name": "Cirezi Food",
                "url": "https://central-achat.alphanewgroup.com/store/admin/",
                "address": {
                    "street_1": "Goma",
                    "street_2": "Himbi",
                    "city": "Goma",
                    "zip": "61",
                    "country": "CD",
                    "state": "Nord Kivu"
                }
            }
        ],
        "store": {
            "id": 1,
            "name": "admin",
            "shop_name": "Cirezi Food",
            "url": "https://central-achat.alphanewgroup.com/store/admin/",
            "address": {
                "street_1": "Goma",
                "street_2": "Himbi",
                "city": "Goma",
                "zip": "61",
                "country": "CD",
                "state": "Nord Kivu"
            }
        },
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/431"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
                }
            ],
            "customer": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
                }
            ],
            "up": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/428"
                }
            ]
        }
    },
]);
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
