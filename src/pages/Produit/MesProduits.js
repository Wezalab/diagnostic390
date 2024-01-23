import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'
import { filter } from 'lodash';

// @mui
import {
  Container, Box, Typography, Card, TableContainer, Table, TableBody, TableRow, TableCell, Checkbox, Stack, IconButton, Paper, TablePagination, Avatar, CircularProgress, Popover, MenuItem,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useNavigate } from 'react-router-dom';
import useWooCommerceAPI from '../../hooks/useWooCommerceAPI';
import { ProductListHead, ProductListToolbar } from '../../sections/@dashboard/product';
import Scrollbar from '../../components/scrollbar';
import Iconify from '../../components/iconify';
import Label from '../../components/label/Label';

export default function MesProduits() {
  const navigate = useNavigate();

  const {
    // products,
    loading,
    fetchProducts
    // error,
  } = useWooCommerceAPI();


  useEffect(() => {
    // store.dispatch(fetchBusinessPlans());
    fetchProducts()
  }, []);

  // console.log(products);

  const [open, setOpen] = useState(null);

  const [products, setProducts] = useState([
    {
        "id": 342,
        "name": "Bath",
        "slug": "bath",
        "permalink": "https://central-achat.alphanewgroup.com/product/bath/",
        "date_created": "2021-01-07T08:00:20",
        "date_created_gmt": "2021-01-07T08:00:20",
        "date_modified": "2024-01-23T17:01:07",
        "date_modified_gmt": "2024-01-23T17:01:07",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>\n<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"</p>\n",
        "short_description": "<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,</p>\n",
        "sku": "",
        "price": "42.5",
        "regular_price": "45",
        "sale_price": "42.5",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "none",
        "tax_class": "",
        "manage_stock": true,
        "stock_quantity": 20,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": false,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 58,
                "name": "Personal Care",
                "slug": "personal-care"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 102,
                "date_created": "2021-01-07T08:00:04",
                "date_created_gmt": "2021-01-07T08:00:04",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/bath-handwash.png",
                "name": "bath-handwash.png",
                "alt": ""
            },
            {
                "id": 400,
                "date_created": "2024-01-23T17:00:20",
                "date_created_gmt": "2024-01-23T17:00:20",
                "date_modified": "2024-01-23T17:00:20",
                "date_modified_gmt": "2024-01-23T17:00:20",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/61orAalccHL._SL1500_.jpg",
                "name": "61orAalccHL._SL1500_",
                "alt": ""
            },
            {
                "id": 401,
                "date_created": "2024-01-23T17:00:26",
                "date_created_gmt": "2024-01-23T17:00:26",
                "date_modified": "2024-01-23T17:00:26",
                "date_modified_gmt": "2024-01-23T17:00:26",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/61MbK7SjXmL._SL1500_.jpg",
                "name": "61MbK7SjXmL._SL1500_",
                "alt": ""
            },
            {
                "id": 402,
                "date_created": "2024-01-23T17:00:32",
                "date_created_gmt": "2024-01-23T17:00:32",
                "date_modified": "2024-01-23T17:00:32",
                "date_modified_gmt": "2024-01-23T17:00:32",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/61X93ySQdQS._SL1500_.jpg",
                "name": "61X93ySQdQS._SL1500_",
                "alt": ""
            },
            {
                "id": 403,
                "date_created": "2024-01-23T17:00:38",
                "date_created_gmt": "2024-01-23T17:00:38",
                "date_modified": "2024-01-23T17:00:38",
                "date_modified_gmt": "2024-01-23T17:00:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/71OZuUFWkyL._SL1500_.jpg",
                "name": "71OZuUFWkyL._SL1500_",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;45,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;42,50</bdi></span></ins>",
        "related_ids": [
            344,
            310,
            322,
            323,
            343
        ],
        "meta_data": [
            {
                "id": 1869,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1875,
                "key": "woosw_count",
                "value": "3"
            },
            {
                "id": 1876,
                "key": "woosw_add",
                "value": "1626175016"
            },
            {
                "id": 2660,
                "key": "_wp_page_template",
                "value": "default"
            },
            {
                "id": 2661,
                "key": "chosen_product_cat",
                "value": [
                    58
                ]
            },
            {
                "id": 2663,
                "key": "_last_editor_used_jetpack",
                "value": "classic-editor"
            },
            {
                "id": 2673,
                "key": "speedycache_post_meta",
                "value": []
            },
            {
                "id": 2674,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
        "store": {
            "id": 2,
            "name": "Fournisseur 1",
            "shop_name": "",
            "url": "https://central-achat.alphanewgroup.com/store/fournisseur1/",
            "address": []
        },
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/342"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 310,
        "name": "Bath & Handwash",
        "slug": "bath-handwash",
        "permalink": "https://central-achat.alphanewgroup.com/product/bath-handwash/",
        "date_created": "2021-01-07T07:59:56",
        "date_created_gmt": "2021-01-07T07:59:56",
        "date_modified": "2021-01-07T07:59:56",
        "date_modified_gmt": "2021-01-07T07:59:56",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>\n<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"</p>\n",
        "short_description": "<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,</p>\n",
        "sku": "",
        "price": "42.5",
        "regular_price": "45",
        "sale_price": "42.5",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 58,
                "name": "Personal Care",
                "slug": "personal-care"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 102,
                "date_created": "2021-01-07T08:00:04",
                "date_created_gmt": "2021-01-07T08:00:04",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/bath-handwash.png",
                "name": "bath-handwash.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;45,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;42,50</bdi></span></ins>",
        "related_ids": [
            343,
            323,
            322,
            342,
            344
        ],
        "meta_data": [
            {
                "id": 1107,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1113,
                "key": "woosw_count",
                "value": "2"
            },
            {
                "id": 1114,
                "key": "woosw_add",
                "value": "1629369050"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/310"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 331,
        "name": "Beanie",
        "slug": "beanie",
        "permalink": "https://central-achat.alphanewgroup.com/product/beanie/",
        "date_created": "2021-01-07T08:00:18",
        "date_created_gmt": "2021-01-07T08:00:18",
        "date_modified": "2021-01-07T08:00:18",
        "date_modified_gmt": "2021-01-07T08:00:18",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "woo-beanie",
        "price": "18",
        "regular_price": "20",
        "sale_price": "18",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 39,
                "name": "Accessories",
                "slug": "accessories"
            },
            {
                "id": 42,
                "name": "Best Sellers",
                "slug": "best-sellers"
            },
            {
                "id": 48,
                "name": "Clothing",
                "slug": "clothing"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 123,
                "date_created": "2021-01-07T08:00:21",
                "date_created_gmt": "2021-01-07T08:00:21",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/product3.png",
                "name": "product3.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 6,
                "name": "color",
                "slug": "pa_color",
                "position": 0,
                "visible": true,
                "variation": false,
                "options": [
                    "Red"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;20,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;18,00</bdi></span></ins>",
        "related_ids": [
            339,
            335,
            336,
            338,
            341
        ],
        "meta_data": [
            {
                "id": 1586,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1593,
                "key": "woosw_count",
                "value": "7"
            },
            {
                "id": 1594,
                "key": "woosw_add",
                "value": "1627420523"
            },
            {
                "id": 1595,
                "key": "woosw_remove",
                "value": "1618465817"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/331"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 341,
        "name": "Beanie with Log",
        "slug": "beanie-with-log",
        "permalink": "https://central-achat.alphanewgroup.com/product/beanie-with-log/",
        "date_created": "2021-01-07T08:00:20",
        "date_created_gmt": "2021-01-07T08:00:20",
        "date_modified": "2024-01-21T01:06:39",
        "date_modified_gmt": "2024-01-21T01:06:39",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "Woo-beanie-logo-1",
        "price": "95",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 1,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 42,
                "name": "Best Sellers",
                "slug": "best-sellers"
            },
            {
                "id": 48,
                "name": "Clothing",
                "slug": "clothing"
            },
            {
                "id": 63,
                "name": "Sale Products",
                "slug": "sale-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 132,
                "date_created": "2021-01-07T08:00:30",
                "date_created_gmt": "2021-01-07T08:00:30",
                "date_modified": "2024-01-21T00:45:39",
                "date_modified_gmt": "2024-01-21T00:45:39",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/p8.png",
                "name": "p8.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 4,
                "name": "image",
                "slug": "pa_image",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "Cap sleeves",
                    "Raglan Sleeve"
                ]
            },
            {
                "id": 8,
                "name": "size",
                "slug": "pa_size",
                "position": 1,
                "visible": true,
                "variation": true,
                "options": [
                    "XL",
                    "XXL"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            373,
            374,
            375,
            376
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;95,00</bdi></span> &ndash; <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;130,00</bdi></span>",
        "related_ids": [
            326,
            338,
            333,
            337,
            340
        ],
        "meta_data": [
            {
                "id": 1842,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1846,
                "key": "woosw_count",
                "value": "10"
            },
            {
                "id": 1847,
                "key": "woosw_add",
                "value": "1628778444"
            },
            {
                "id": 1848,
                "key": "woosw_remove",
                "value": "1623004127"
            },
            {
                "id": 1849,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            },
            {
                "id": 2579,
                "key": "pageview",
                "value": "1"
            }
        ],
        "stock_status": "outofstock",
        "has_options": true,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/341"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 339,
        "name": "Beanie with Logo",
        "slug": "beanie-with-logo",
        "permalink": "https://central-achat.alphanewgroup.com/product/beanie-with-logo/",
        "date_created": "2021-01-07T08:00:19",
        "date_created_gmt": "2021-01-07T08:00:19",
        "date_modified": "2021-01-07T08:00:19",
        "date_modified_gmt": "2021-01-07T08:00:19",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "Woo-beanie-logo",
        "price": "40",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 48,
                "name": "Clothing",
                "slug": "clothing"
            },
            {
                "id": 63,
                "name": "Sale Products",
                "slug": "sale-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 130,
                "date_created": "2021-01-07T08:00:29",
                "date_created_gmt": "2021-01-07T08:00:29",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/product16.png",
                "name": "product16.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 6,
                "name": "color",
                "slug": "pa_color",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "Black",
                    "Brown",
                    "Gray"
                ]
            },
            {
                "id": 8,
                "name": "size",
                "slug": "pa_size",
                "position": 1,
                "visible": true,
                "variation": true,
                "options": [
                    "XL",
                    "XXL"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            377,
            378,
            379,
            382
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;40,00</bdi></span> &ndash; <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;95,00</bdi></span>",
        "related_ids": [
            335,
            340,
            336,
            337,
            338
        ],
        "meta_data": [
            {
                "id": 1787,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1791,
                "key": "woosw_count",
                "value": "4"
            },
            {
                "id": 1792,
                "key": "woosw_add",
                "value": "1621313064"
            }
        ],
        "stock_status": "instock",
        "has_options": true,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/339"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 344,
        "name": "Beauty Product",
        "slug": "beauty-product",
        "permalink": "https://central-achat.alphanewgroup.com/product/beauty-product/",
        "date_created": "2021-01-07T08:00:20",
        "date_created_gmt": "2021-01-07T08:00:20",
        "date_modified": "2021-01-07T08:00:20",
        "date_modified_gmt": "2021-01-07T08:00:20",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>\n<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"</p>\n",
        "short_description": "<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,</p>\n",
        "sku": "",
        "price": "",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 42,
                "name": "Best Sellers",
                "slug": "best-sellers"
            },
            {
                "id": 58,
                "name": "Personal Care",
                "slug": "personal-care"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 133,
                "date_created": "2021-01-07T08:00:31",
                "date_created_gmt": "2021-01-07T08:00:31",
                "date_modified": "2024-01-21T00:45:39",
                "date_modified_gmt": "2024-01-21T00:45:39",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/beauty.png",
                "name": "beauty.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "",
        "related_ids": [
            335,
            327,
            341,
            331,
            336
        ],
        "meta_data": [
            {
                "id": 1915,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1918,
                "key": "woosw_count",
                "value": "12"
            },
            {
                "id": 1919,
                "key": "woosw_add",
                "value": "1628769498"
            },
            {
                "id": 1921,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/344"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 332,
        "name": "Belt",
        "slug": "belt",
        "permalink": "https://central-achat.alphanewgroup.com/product/belt/",
        "date_created": "2021-01-07T08:00:18",
        "date_created_gmt": "2021-01-07T08:00:18",
        "date_modified": "2021-01-07T08:00:18",
        "date_modified_gmt": "2021-01-07T08:00:18",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "woo-belt",
        "price": "55",
        "regular_price": "65",
        "sale_price": "55",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 1,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 39,
                "name": "Accessories",
                "slug": "accessories"
            },
            {
                "id": 42,
                "name": "Best Sellers",
                "slug": "best-sellers"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 124,
                "date_created": "2021-01-07T08:00:22",
                "date_created_gmt": "2021-01-07T08:00:22",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/product13-1.png",
                "name": "product13-1.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;65,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;55,00</bdi></span></ins>",
        "related_ids": [
            331,
            341,
            336,
            327,
            333
        ],
        "meta_data": [
            {
                "id": 1612,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1618,
                "key": "woosw_count",
                "value": "3"
            },
            {
                "id": 1619,
                "key": "woosw_add",
                "value": "1628378426"
            },
            {
                "id": 2611,
                "key": "pageview",
                "value": "2"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/332"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 308,
        "name": "Cakes & Pastries",
        "slug": "cakes-pastries",
        "permalink": "https://central-achat.alphanewgroup.com/product/cakes-pastries/",
        "date_created": "2021-01-07T07:59:56",
        "date_created_gmt": "2021-01-07T07:59:56",
        "date_modified": "2021-01-07T07:59:56",
        "date_modified_gmt": "2021-01-07T07:59:56",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>\n<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"</p>\n",
        "short_description": "<p>&#8220;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>\n",
        "sku": "",
        "price": "22",
        "regular_price": "22",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 50,
                "name": "Dairy Products",
                "slug": "dairy-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 100,
                "date_created": "2021-01-07T08:00:03",
                "date_created_gmt": "2021-01-07T08:00:03",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/cakes-patries.png",
                "name": "cakes-patries.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;22,00</bdi></span>",
        "related_ids": [
            307,
            309
        ],
        "meta_data": [
            {
                "id": 1064,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1069,
                "key": "woosw_count",
                "value": "2"
            },
            {
                "id": 1070,
                "key": "woosw_add",
                "value": "1625691034"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/308"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 333,
        "name": "Cap",
        "slug": "cap",
        "permalink": "https://central-achat.alphanewgroup.com/product/cap/",
        "date_created": "2021-01-07T08:00:18",
        "date_created_gmt": "2021-01-07T08:00:18",
        "date_modified": "2021-01-07T08:00:18",
        "date_modified_gmt": "2021-01-07T08:00:18",
        "type": "simple",
        "status": "publish",
        "featured": true,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "woo-cap",
        "price": "16",
        "regular_price": "18",
        "sale_price": "16",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 39,
                "name": "Accessories",
                "slug": "accessories"
            },
            {
                "id": 63,
                "name": "Sale Products",
                "slug": "sale-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 125,
                "date_created": "2021-01-07T08:00:25",
                "date_created_gmt": "2021-01-07T08:00:25",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/p2-1.png",
                "name": "p2-1.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 6,
                "name": "color",
                "slug": "pa_color",
                "position": 0,
                "visible": true,
                "variation": false,
                "options": [
                    "Yellow"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;18,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;16,00</bdi></span></ins>",
        "related_ids": [
            326,
            325,
            331,
            338,
            334
        ],
        "meta_data": [
            {
                "id": 1636,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1643,
                "key": "woosw_count",
                "value": "2"
            },
            {
                "id": 1644,
                "key": "woosw_add",
                "value": "1620177130"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/333"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 343,
        "name": "Cosmetics",
        "slug": "cosmetics",
        "permalink": "https://central-achat.alphanewgroup.com/product/cosmetics/",
        "date_created": "2021-01-07T08:00:20",
        "date_created_gmt": "2021-01-07T08:00:20",
        "date_modified": "2021-01-07T08:00:20",
        "date_modified_gmt": "2021-01-07T08:00:20",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>\n<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"</p>\n",
        "short_description": "<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,</p>\n",
        "sku": "",
        "price": "",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 42,
                "name": "Best Sellers",
                "slug": "best-sellers"
            },
            {
                "id": 58,
                "name": "Personal Care",
                "slug": "personal-care"
            }
        ],
        "tags": [],
        "images": [],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "",
        "related_ids": [
            344,
            310,
            342,
            338,
            336
        ],
        "meta_data": [
            {
                "id": 1892,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1895,
                "key": "woosw_count",
                "value": "9"
            },
            {
                "id": 1896,
                "key": "woosw_add",
                "value": "1629406997"
            },
            {
                "id": 1897,
                "key": "woosw_remove",
                "value": "1628107466"
            },
            {
                "id": 1898,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/343"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 325,
        "name": "Cras bibendum enim justo",
        "slug": "cras-bibendum-enim-justo",
        "permalink": "https://central-achat.alphanewgroup.com/product/cras-bibendum-enim-justo/",
        "date_created": "2021-01-07T07:59:59",
        "date_created_gmt": "2021-01-07T07:59:59",
        "date_modified": "2021-01-07T07:59:59",
        "date_modified_gmt": "2021-01-07T07:59:59",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<div class=\"woocommerce-product-details__short-description\">\n<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n</div>\n<form class=\"cart\" action=\"https://wpthemes.themehunk.com/open-mart/product/long-sleeve-tee/\" enctype=\"multipart/form-data\" method=\"post\">\n<div class=\"open-mart-quantity\"></div>\n</form>\n",
        "sku": "",
        "price": "300",
        "regular_price": "300",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 39,
                "name": "Accessories",
                "slug": "accessories"
            },
            {
                "id": 63,
                "name": "Sale Products",
                "slug": "sale-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 120,
                "date_created": "2021-01-07T08:00:14",
                "date_created_gmt": "2021-01-07T08:00:14",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/p3.png",
                "name": "p3.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;300,00</bdi></span>",
        "related_ids": [
            340,
            335,
            339,
            341,
            337
        ],
        "meta_data": [
            {
                "id": 1443,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1448,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            },
            {
                "id": 1450,
                "key": "woosw_count",
                "value": "3"
            },
            {
                "id": 1451,
                "key": "woosw_add",
                "value": "1627243517"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/325"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 320,
        "name": "Dry Fruits",
        "slug": "dry-fruits",
        "permalink": "https://central-achat.alphanewgroup.com/product/dry-fruits/",
        "date_created": "2021-01-07T07:59:58",
        "date_created_gmt": "2021-01-07T07:59:58",
        "date_modified": "2021-01-07T07:59:58",
        "date_modified_gmt": "2021-01-07T07:59:58",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut</p>\n<p>labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"</p>\n",
        "short_description": "<p>&#8220;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>\n<p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&#8221;</p>\n",
        "sku": "",
        "price": "20",
        "regular_price": "22",
        "sale_price": "20",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 51,
                "name": "FoodGrains",
                "slug": "foodgrains"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 114,
                "date_created": "2021-01-07T08:00:10",
                "date_created_gmt": "2021-01-07T08:00:10",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/Dry-fruits.png",
                "name": "Dry-fruits.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;22,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;20,00</bdi></span></ins>",
        "related_ids": [
            345,
            321,
            346
        ],
        "meta_data": [
            {
                "id": 1334,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/320"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 321,
        "name": "Edible Oil & Ghee",
        "slug": "edible-oil-ghee",
        "permalink": "https://central-achat.alphanewgroup.com/product/edible-oil-ghee/",
        "date_created": "2021-01-07T07:59:58",
        "date_created_gmt": "2021-01-07T07:59:58",
        "date_modified": "2021-01-07T07:59:58",
        "date_modified_gmt": "2021-01-07T07:59:58",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"</p>\n",
        "short_description": "<p>&#8220;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&#8221;</p>\n",
        "sku": "",
        "price": "45",
        "regular_price": "50",
        "sale_price": "45",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 51,
                "name": "FoodGrains",
                "slug": "foodgrains"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 115,
                "date_created": "2021-01-07T08:00:11",
                "date_created_gmt": "2021-01-07T08:00:11",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/Edible-oil-ghee.png",
                "name": "Edible-oil-ghee.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;50,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;45,00</bdi></span></ins>",
        "related_ids": [
            346,
            320,
            345
        ],
        "meta_data": [
            {
                "id": 1355,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/321"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 394,
        "name": "FOurnisseur 1 offering",
        "slug": "fournisseur-1-offering",
        "permalink": "https://central-achat.alphanewgroup.com/product/fournisseur-1-offering/",
        "date_created": "2024-01-21T01:09:50",
        "date_created_gmt": "2024-01-21T01:09:50",
        "date_modified": "2024-01-21T01:09:51",
        "date_modified_gmt": "2024-01-21T01:09:51",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
        "sku": "",
        "price": "21.99",
        "regular_price": "21.99",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 25,
                "name": "Uncategorized",
                "slug": "uncategorized"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 393,
                "date_created": "2024-01-21T01:09:50",
                "date_created_gmt": "2024-01-21T01:09:50",
                "date_modified": "2024-01-21T01:09:51",
                "date_modified_gmt": "2024-01-21T01:09:51",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/T_2_front-1.jpg",
                "name": "T_2_front-1.jpg",
                "alt": ""
            },
            {
                "id": 395,
                "date_created": "2024-01-21T01:09:51",
                "date_created_gmt": "2024-01-21T01:09:51",
                "date_modified": "2024-01-21T01:09:51",
                "date_modified_gmt": "2024-01-21T01:09:51",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/T_2_back-1.jpg",
                "name": "T_2_back-1.jpg",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;21,99</bdi></span>",
        "related_ids": [
            87
        ],
        "meta_data": [
            {
                "id": 2655,
                "key": "pageview",
                "value": "1"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/394"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 322,
        "name": "Hair Care",
        "slug": "hair-care",
        "permalink": "https://central-achat.alphanewgroup.com/product/hair-care/",
        "date_created": "2021-01-07T07:59:58",
        "date_created_gmt": "2021-01-07T07:59:58",
        "date_modified": "2021-01-07T07:59:58",
        "date_modified_gmt": "2021-01-07T07:59:58",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>\n<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n",
        "short_description": "<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,</p>\n<p>omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.&#8221;</p>\n",
        "sku": "",
        "price": "52",
        "regular_price": "55",
        "sale_price": "52",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            30
        ],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 58,
                "name": "Personal Care",
                "slug": "personal-care"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 116,
                "date_created": "2021-01-07T08:00:12",
                "date_created_gmt": "2021-01-07T08:00:12",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/Hair-Care.png",
                "name": "Hair-Care.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;55,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;52,00</bdi></span></ins>",
        "related_ids": [
            310,
            342,
            343,
            323,
            344
        ],
        "meta_data": [
            {
                "id": 1375,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/322"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 309,
        "name": "Ice Cream/Novelties",
        "slug": "ice-cream-novelties",
        "permalink": "https://central-achat.alphanewgroup.com/product/ice-cream-novelties/",
        "date_created": "2021-01-07T07:59:56",
        "date_created_gmt": "2021-01-07T07:59:56",
        "date_modified": "2021-01-07T07:59:56",
        "date_modified_gmt": "2021-01-07T07:59:56",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>\n<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et</p>\n<p>&nbsp;</p>\n",
        "short_description": "<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus</p>\n",
        "sku": "",
        "price": "20",
        "regular_price": "24.5",
        "sale_price": "20",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 50,
                "name": "Dairy Products",
                "slug": "dairy-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 101,
                "date_created": "2021-01-07T08:00:03",
                "date_created_gmt": "2021-01-07T08:00:03",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/Ice-Cream-Novelties.png",
                "name": "Ice-Cream-Novelties.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;24,50</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;20,00</bdi></span></ins>",
        "related_ids": [
            307,
            308
        ],
        "meta_data": [
            {
                "id": 1086,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/309"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 335,
        "name": "Long Sleeve Tee",
        "slug": "long-sleeve-tee",
        "permalink": "https://central-achat.alphanewgroup.com/product/long-sleeve-tee/",
        "date_created": "2021-01-07T08:00:19",
        "date_created_gmt": "2021-01-07T08:00:19",
        "date_modified": "2021-01-07T08:00:19",
        "date_modified_gmt": "2021-01-07T08:00:19",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "woo-long-sleeve-tee",
        "price": "66",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 42,
                "name": "Best Sellers",
                "slug": "best-sellers"
            },
            {
                "id": 48,
                "name": "Clothing",
                "slug": "clothing"
            },
            {
                "id": 63,
                "name": "Sale Products",
                "slug": "sale-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 127,
                "date_created": "2021-01-07T08:00:26",
                "date_created_gmt": "2021-01-07T08:00:26",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/p20.png",
                "name": "p20.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 6,
                "name": "color",
                "slug": "pa_color",
                "position": 1,
                "visible": true,
                "variation": true,
                "options": [
                    "Black",
                    "White",
                    "Yellow"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            348,
            349,
            350
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;66,00</bdi></span> &ndash; <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;88,00</bdi></span>",
        "related_ids": [
            338,
            340,
            334,
            333,
            326
        ],
        "meta_data": [
            {
                "id": 1684,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1688,
                "key": "woosw_count",
                "value": "6"
            },
            {
                "id": 1689,
                "key": "woosw_add",
                "value": "1628180185"
            },
            {
                "id": 1694,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": true,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/335"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 74,
        "name": "Machine a coudre",
        "slug": "machine-a-coudre",
        "permalink": "https://central-achat.alphanewgroup.com/product/machine-a-coudre/",
        "date_created": "2024-01-20T18:19:20",
        "date_created_gmt": "2024-01-20T18:19:20",
        "date_modified": "2024-01-20T19:31:21",
        "date_modified_gmt": "2024-01-20T19:31:21",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<div id=\"featurebullets_feature_div\" class=\"celwidget\" data-feature-name=\"featurebullets\" data-csa-c-type=\"widget\" data-csa-c-content-id=\"featurebullets\" data-csa-c-slot-id=\"featurebullets_feature_div\" data-csa-c-asin=\"B07W7YZJQH\" data-csa-c-is-in-initial-active-row=\"false\" data-csa-c-id=\"7hxtdj-ubt1qq-vm3euq-6qhzwr\" data-cel-widget=\"featurebullets_feature_div\">\n<div id=\"feature-bullets\" class=\"a-section a-spacing-medium a-spacing-top-small\">\n<h1 class=\"a-size-base-plus a-text-bold\">À propos de cet article</h1>\n<ul class=\"a-unordered-list a-vertical a-spacing-mini\">\n<li class=\"a-spacing-mini\"><span class=\"a-list-item\">[FACILE A’ UTILISER] Une machine à coudre particulièrement intuitive, compacte, pratique et maniable. Idéale pour les débutants et les passionnés de couture</span></li>\n<li class=\"a-spacing-mini\"><span class=\"a-list-item\">[SUPER COMPLETE] 17 points, Couture en marche arrière, 6 différents Points droits, points stretch, boutonnière en 4 étapes, réglage de la boutonnière, gestion de la position de l’aiguille, point zigzag et réglage de la tension du fil</span></li>\n<li class=\"a-spacing-mini\"><span class=\"a-list-item\">[SPECIALE TISSUS EPAIS] Equipée de double levée du pied de biche, plaque en métal, robuste crochet rotatif, moteur puissant, 6 rangs de griffes de transport et pratique plan de travail éclairé à Led toutes ces caractéristiques importantes assurent une couture parfaite soit sur les tissus légers qu’épais comme le Jeans</span></li>\n<li class=\"a-spacing-mini\"><span class=\"a-list-item\">[ROBUSTE, PRATIQUE ET MANIABLE] Châssis en robuste métal et garantie de 3 ans. La poignée intégrée dans la coque de la machine à coudre permet de la transporter aisément. Idéale pour les cours de couture simples ou créatifs. Avec la machine à coudre Brother JX17FE en Edition Limitée, tout travail de couture et créatif sera réalisé simplement et rapidement</span></li>\n<li class=\"a-spacing-mini\"><span class=\"a-list-item\">[BRAS LIBRE] Cette caractéristique permet de réaliser les coutures tubulaires en suivant le contour de tout type de vêtement, comme les jambes des pantalons, les poignets, les gants et plus encore</span></li>\n</ul>\n</div>\n</div>\n<div id=\"provenanceCertifications_feature_div\" class=\"celwidget\" data-feature-name=\"provenanceCertifications\" data-csa-c-type=\"widget\" data-csa-c-content-id=\"provenanceCertifications\" data-csa-c-slot-id=\"provenanceCertifications_feature_div\" data-csa-c-asin=\"B07W7YZJQH\" data-csa-c-is-in-initial-active-row=\"false\" data-csa-c-id=\"7h4mp2-jgt20o-g9zcxe-yv3im5\" data-cel-widget=\"provenanceCertifications_feature_div\"></div>\n<div id=\"handmadeArtisanCard_feature_div\" class=\"celwidget\" data-feature-name=\"handmadeArtisanCard\" data-csa-c-type=\"widget\" data-csa-c-content-id=\"handmadeArtisanCard\" data-csa-c-slot-id=\"handmadeArtisanCard_feature_div\" data-csa-c-asin=\"B07W7YZJQH\" data-csa-c-is-in-initial-active-row=\"false\" data-csa-c-id=\"4gk33k-dolky0-ajso3y-uay8ek\" data-cel-widget=\"handmadeArtisanCard_feature_div\"></div>\n<div id=\"customerReviewsAttribute_feature_div\" class=\"celwidget\" data-feature-name=\"customerReviewsAttribute\" data-csa-c-type=\"widget\" data-csa-c-content-id=\"customerReviewsAttribute\" data-csa-c-slot-id=\"customerReviewsAttribute_feature_div\" data-csa-c-asin=\"B07W7YZJQH\" data-csa-c-is-in-initial-active-row=\"false\" data-csa-c-id=\"kr1blp-3fhis7-duk1lc-ausbav\" data-cel-widget=\"customerReviewsAttribute_feature_div\">\n<div class=\"cra-desktop-width \">\n<div class=\"a-row a-spacing-base\"></div>\n</div>\n</div>\n",
        "short_description": "<p>Brother JX17FE (Fantasy Edition) Machine à Coudre électrique pour Débutants, Portable, 17 Points différents, Couture automatique, points utiles, élastiques et décoratifs, Multifonction</p>\n",
        "sku": "Machine",
        "price": "80",
        "regular_price": "100",
        "sale_price": "80",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "16",
        "dimensions": {
            "length": "100",
            "width": "200",
            "height": "400"
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "<p>Merci</p>\n",
        "categories": [
            {
                "id": 26,
                "name": "Coupe et couture",
                "slug": "coupe-et-couture"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 77,
                "date_created": "2024-01-20T18:15:57",
                "date_created_gmt": "2024-01-20T18:15:57",
                "date_modified": "2024-01-20T18:15:57",
                "date_modified_gmt": "2024-01-20T18:15:57",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/71ovE9ROJL._AC_CR0000_SX615_SY462_.jpg",
                "name": "71ovE9+ROJL._AC_CR0,0,0,0_SX615_SY462_",
                "alt": ""
            },
            {
                "id": 75,
                "date_created": "2024-01-20T18:15:35",
                "date_created_gmt": "2024-01-20T18:15:35",
                "date_modified": "2024-01-20T18:15:35",
                "date_modified_gmt": "2024-01-20T18:15:35",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/81HUoY3LHML._AC_CR0000_SX615_SY462_.jpg",
                "name": "81HUoY3LHML._AC_CR0,0,0,0_SX615_SY462_",
                "alt": ""
            },
            {
                "id": 76,
                "date_created": "2024-01-20T18:15:53",
                "date_created_gmt": "2024-01-20T18:15:53",
                "date_modified": "2024-01-20T18:15:53",
                "date_modified_gmt": "2024-01-20T18:15:53",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/81CgTdBzQrL._AC_CR0000_SX615_SY462_.jpg",
                "name": "81CgTdBzQrL._AC_CR0,0,0,0_SX615_SY462_",
                "alt": ""
            },
            {
                "id": 77,
                "date_created": "2024-01-20T18:15:57",
                "date_created_gmt": "2024-01-20T18:15:57",
                "date_modified": "2024-01-20T18:15:57",
                "date_modified_gmt": "2024-01-20T18:15:57",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/71ovE9ROJL._AC_CR0000_SX615_SY462_.jpg",
                "name": "71ovE9+ROJL._AC_CR0,0,0,0_SX615_SY462_",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 0,
                "name": "Couleur",
                "slug": "Couleur",
                "position": 0,
                "visible": true,
                "variation": false,
                "options": [
                    "Blanche",
                    "Rouge"
                ]
            },
            {
                "id": 0,
                "name": "Format",
                "slug": "Format",
                "position": 1,
                "visible": true,
                "variation": false,
                "options": [
                    "Grand",
                    "Petit"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;100,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;80,00</bdi></span></ins>",
        "related_ids": [],
        "meta_data": [
            {
                "id": 257,
                "key": "_last_editor_used_jetpack",
                "value": "classic-editor"
            },
            {
                "id": 309,
                "key": "chosen_product_cat",
                "value": [
                    26
                ]
            },
            {
                "id": 311,
                "key": "pageview",
                "value": "2"
            },
            {
                "id": 312,
                "key": "_wp_page_template",
                "value": "default"
            },
            {
                "id": 313,
                "key": "speedycache_post_meta",
                "value": []
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
        "store": {
            "id": 2,
            "name": "Fournisseur 1",
            "shop_name": "",
            "url": "https://central-achat.alphanewgroup.com/store/fournisseur1/",
            "address": []
        },
        "_links": {
            "self": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/74"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 307,
        "name": "Milk Products",
        "slug": "milk-products",
        "permalink": "https://central-achat.alphanewgroup.com/product/milk-products/",
        "date_created": "2021-01-07T07:59:56",
        "date_created_gmt": "2021-01-07T07:59:56",
        "date_modified": "2021-01-07T07:59:56",
        "date_modified_gmt": "2021-01-07T07:59:56",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>\n<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"</p>\n",
        "short_description": "<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est</p>\n<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita</p>\n",
        "sku": "",
        "price": "18",
        "regular_price": "20",
        "sale_price": "18",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 50,
                "name": "Dairy Products",
                "slug": "dairy-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 99,
                "date_created": "2021-01-07T08:00:02",
                "date_created_gmt": "2021-01-07T08:00:02",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/milk-products.png",
                "name": "milk-products.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;20,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;18,00</bdi></span></ins>",
        "related_ids": [
            309,
            308
        ],
        "meta_data": [
            {
                "id": 1041,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1047,
                "key": "woosw_count",
                "value": "2"
            },
            {
                "id": 1048,
                "key": "woosw_add",
                "value": "1629331073"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/307"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 346,
        "name": "Oil",
        "slug": "oil",
        "permalink": "https://central-achat.alphanewgroup.com/product/oil/",
        "date_created": "2021-01-07T08:00:21",
        "date_created_gmt": "2021-01-07T08:00:21",
        "date_modified": "2021-01-07T08:00:21",
        "date_modified_gmt": "2021-01-07T08:00:21",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut</p>\n<p>labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"</p>\n",
        "short_description": "<p>&#8220;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>\n<p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&#8221;</p>\n",
        "sku": "",
        "price": "120",
        "regular_price": "120",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 51,
                "name": "FoodGrains",
                "slug": "foodgrains"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 135,
                "date_created": "2021-01-07T08:00:32",
                "date_created_gmt": "2021-01-07T08:00:32",
                "date_modified": "2024-01-21T00:45:39",
                "date_modified_gmt": "2024-01-21T00:45:39",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/food-grain-2.png",
                "name": "food-grain-2.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;120,00</bdi></span>",
        "related_ids": [
            321,
            320,
            345
        ],
        "meta_data": [
            {
                "id": 1961,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1966,
                "key": "woosw_count",
                "value": "4"
            },
            {
                "id": 1967,
                "key": "woosw_add",
                "value": "1628869816"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/346"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 317,
        "name": "Organic Banana",
        "slug": "organic-banana",
        "permalink": "https://central-achat.alphanewgroup.com/product/organic-banana/",
        "date_created": "2021-01-07T07:59:58",
        "date_created_gmt": "2021-01-07T07:59:58",
        "date_modified": "2021-01-07T07:59:58",
        "date_modified_gmt": "2021-01-07T07:59:58",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n<div></div>\n",
        "short_description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n<p>&nbsp;</p>\n</div>\n<div></div>\n",
        "sku": "",
        "price": "",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            24,
            25
        ],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 65,
                "name": "Vegetables &amp; Fruits",
                "slug": "vegetables-fruits"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 110,
                "date_created": "2021-01-07T08:00:08",
                "date_created_gmt": "2021-01-07T08:00:08",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/organicc-banana.png",
                "name": "organicc-banana.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 1,
                "name": "dozen",
                "slug": "pa_dozen",
                "position": 1,
                "visible": true,
                "variation": true,
                "options": [
                    "1Dozen",
                    "3Dozen",
                    "5Dozen"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "",
        "related_ids": [
            324,
            314,
            316,
            312,
            319
        ],
        "meta_data": [
            {
                "id": 1256,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1260,
                "key": "woosw_count",
                "value": "1"
            },
            {
                "id": 1261,
                "key": "woosw_add",
                "value": "1626031844"
            },
            {
                "id": 1266,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/317"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 315,
        "name": "Organic Broccoli",
        "slug": "organic-broccoli",
        "permalink": "https://central-achat.alphanewgroup.com/product/organic-broccoli/",
        "date_created": "2021-01-07T07:59:57",
        "date_created_gmt": "2021-01-07T07:59:57",
        "date_modified": "2021-01-07T07:59:57",
        "date_modified_gmt": "2021-01-07T07:59:57",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\n<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"</p>\n",
        "short_description": "<p>&#8220;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>\n<p>&nbsp;</p>\n",
        "sku": "",
        "price": "22",
        "regular_price": "22",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 65,
                "name": "Vegetables &amp; Fruits",
                "slug": "vegetables-fruits"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 108,
                "date_created": "2021-01-07T08:00:07",
                "date_created_gmt": "2021-01-07T08:00:07",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/organicc-brocolli.png",
                "name": "organicc-brocolli.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;22,00</bdi></span>",
        "related_ids": [
            319,
            314,
            313,
            317,
            312
        ],
        "meta_data": [
            {
                "id": 1214,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1219,
                "key": "woosw_count",
                "value": "0"
            },
            {
                "id": 1220,
                "key": "woosw_add",
                "value": "1622475633"
            },
            {
                "id": 1221,
                "key": "woosw_remove",
                "value": "1622479823"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/315"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 318,
        "name": "Organic Cheeries",
        "slug": "organic-cheeries",
        "permalink": "https://central-achat.alphanewgroup.com/product/organic-cheeries/",
        "date_created": "2021-01-07T07:59:58",
        "date_created_gmt": "2021-01-07T07:59:58",
        "date_modified": "2021-01-07T07:59:58",
        "date_modified_gmt": "2021-01-07T07:59:58",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n<div></div>\n",
        "short_description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n<p>&nbsp;</p>\n</div>\n",
        "sku": "",
        "price": "",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            20,
            19,
            17
        ],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 65,
                "name": "Vegetables &amp; Fruits",
                "slug": "vegetables-fruits"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 111,
                "date_created": "2021-01-07T08:00:09",
                "date_created_gmt": "2021-01-07T08:00:09",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/organicc-cheeries.png",
                "name": "organicc-cheeries.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 2,
                "name": "kg",
                "slug": "pa_kg",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "1Kg",
                    "3Kg",
                    "5Kg"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "",
        "related_ids": [
            314,
            324,
            315,
            317,
            316
        ],
        "meta_data": [
            {
                "id": 1281,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1285,
                "key": "woosw_count",
                "value": "1"
            },
            {
                "id": 1286,
                "key": "woosw_add",
                "value": "1628762839"
            },
            {
                "id": 1287,
                "key": "woosw_remove",
                "value": "1628762843"
            },
            {
                "id": 1292,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/318"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 312,
        "name": "Organic Corn",
        "slug": "organic-corn",
        "permalink": "https://central-achat.alphanewgroup.com/product/organic-corn/",
        "date_created": "2021-01-07T07:59:57",
        "date_created_gmt": "2021-01-07T07:59:57",
        "date_modified": "2021-01-07T07:59:57",
        "date_modified_gmt": "2021-01-07T07:59:57",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n",
        "short_description": "<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n",
        "sku": "",
        "price": "20",
        "regular_price": "20",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 65,
                "name": "Vegetables &amp; Fruits",
                "slug": "vegetables-fruits"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 105,
                "date_created": "2021-01-07T08:00:06",
                "date_created_gmt": "2021-01-07T08:00:06",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/organicc-corn.png",
                "name": "organicc-corn.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;20,00</bdi></span>",
        "related_ids": [
            317,
            314,
            315,
            311,
            318
        ],
        "meta_data": [
            {
                "id": 1151,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1156,
                "key": "woosw_count",
                "value": "1"
            },
            {
                "id": 1157,
                "key": "woosw_add",
                "value": "1625373906"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/312"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 319,
        "name": "Organic Grapes",
        "slug": "organic-grapes",
        "permalink": "https://central-achat.alphanewgroup.com/product/organic-grapes/",
        "date_created": "2021-01-07T07:59:58",
        "date_created_gmt": "2021-01-07T07:59:58",
        "date_modified": "2021-01-07T07:59:58",
        "date_modified_gmt": "2021-01-07T07:59:58",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n<div></div>\n",
        "short_description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n<p>&nbsp;</p>\n</div>\n",
        "sku": "",
        "price": "",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            18
        ],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 65,
                "name": "Vegetables &amp; Fruits",
                "slug": "vegetables-fruits"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 112,
                "date_created": "2021-01-07T08:00:09",
                "date_created_gmt": "2021-01-07T08:00:09",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/organicc-grapes.png",
                "name": "organicc-grapes.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "",
        "related_ids": [
            312,
            315,
            317,
            318,
            313
        ],
        "meta_data": [
            {
                "id": 1308,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1312,
                "key": "woosw_count",
                "value": "1"
            },
            {
                "id": 1313,
                "key": "woosw_add",
                "value": "1623546638"
            },
            {
                "id": 1317,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/319"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 316,
        "name": "Organic Green Chillies",
        "slug": "organic-green-chillies",
        "permalink": "https://central-achat.alphanewgroup.com/product/organic-green-chillies/",
        "date_created": "2021-01-07T07:59:57",
        "date_created_gmt": "2021-01-07T07:59:57",
        "date_modified": "2021-01-07T07:59:57",
        "date_modified_gmt": "2021-01-07T07:59:57",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>\n<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>\n",
        "short_description": "<p>here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#8217;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#8217;t anything embarrassing hidden in the middle of text.</p>\n<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>\n<p>&nbsp;</p>\n",
        "sku": "",
        "price": "10",
        "regular_price": "10",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            18,
            17
        ],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 65,
                "name": "Vegetables &amp; Fruits",
                "slug": "vegetables-fruits"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 109,
                "date_created": "2021-01-07T08:00:08",
                "date_created_gmt": "2021-01-07T08:00:08",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/organicc-green-chillies.png",
                "name": "organicc-green-chillies.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;10,00</bdi></span>",
        "related_ids": [
            313,
            324,
            317,
            315,
            319
        ],
        "meta_data": [
            {
                "id": 1236,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/316"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 313,
        "name": "Organic Peas",
        "slug": "organic-peas",
        "permalink": "https://central-achat.alphanewgroup.com/product/organic-peas/",
        "date_created": "2021-01-07T07:59:57",
        "date_created_gmt": "2021-01-07T07:59:57",
        "date_modified": "2021-01-07T07:59:57",
        "date_modified_gmt": "2021-01-07T07:59:57",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n<div></div>\n",
        "short_description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n</div>\n",
        "sku": "",
        "price": "26",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 65,
                "name": "Vegetables &amp; Fruits",
                "slug": "vegetables-fruits"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 106,
                "date_created": "2021-01-07T08:00:06",
                "date_created_gmt": "2021-01-07T08:00:06",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/organicc-peas.png",
                "name": "organicc-peas.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 2,
                "name": "kg",
                "slug": "pa_kg",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "1Kg",
                    "3Kg",
                    "5Kg"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            351,
            352,
            353
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;26,00</bdi></span> &ndash; <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;140,00</bdi></span>",
        "related_ids": [
            318,
            312,
            324,
            317,
            319
        ],
        "meta_data": [
            {
                "id": 1172,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1180,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": true,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/313"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 324,
        "name": "Organic Potatoes",
        "slug": "organic-potatoes",
        "permalink": "https://central-achat.alphanewgroup.com/product/organic-potatoes/",
        "date_created": "2021-01-07T07:59:59",
        "date_created_gmt": "2021-01-07T07:59:59",
        "date_modified": "2021-01-07T07:59:59",
        "date_modified_gmt": "2021-01-07T07:59:59",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n<div></div>\n",
        "short_description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n<p>&nbsp;</p>\n</div>\n",
        "sku": "",
        "price": "",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 65,
                "name": "Vegetables &amp; Fruits",
                "slug": "vegetables-fruits"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 119,
                "date_created": "2021-01-07T08:00:13",
                "date_created_gmt": "2021-01-07T08:00:13",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/organicc-potatoes.png",
                "name": "organicc-potatoes.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "",
        "related_ids": [
            317,
            313,
            314,
            312,
            311
        ],
        "meta_data": [
            {
                "id": 1419,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1422,
                "key": "woosw_count",
                "value": "3"
            },
            {
                "id": 1423,
                "key": "woosw_add",
                "value": "1628751800"
            },
            {
                "id": 1427,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/324"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 311,
        "name": "Organic Tomatoes",
        "slug": "organic-tomatoes",
        "permalink": "https://central-achat.alphanewgroup.com/product/organic-tomatoes/",
        "date_created": "2021-01-07T07:59:57",
        "date_created_gmt": "2021-01-07T07:59:57",
        "date_modified": "2021-01-07T07:59:57",
        "date_modified_gmt": "2021-01-07T07:59:57",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n<div></div>\n",
        "short_description": "<div>\n<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#8217;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\n<p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n</div>\n<div></div>\n",
        "sku": "",
        "price": "12",
        "regular_price": "15",
        "sale_price": "12",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 65,
                "name": "Vegetables &amp; Fruits",
                "slug": "vegetables-fruits"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 104,
                "date_created": "2021-01-07T08:00:05",
                "date_created_gmt": "2021-01-07T08:00:05",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/organicc-tomatoes.png",
                "name": "organicc-tomatoes.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;15,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;12,00</bdi></span></ins>",
        "related_ids": [
            314,
            317,
            312,
            319,
            318
        ],
        "meta_data": [
            {
                "id": 1129,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1135,
                "key": "woosw_count",
                "value": "1"
            },
            {
                "id": 1136,
                "key": "woosw_add",
                "value": "1616358994"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/311"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 314,
        "name": "Organic lettuce",
        "slug": "organic-lettuce",
        "permalink": "https://central-achat.alphanewgroup.com/product/organic-lettuce/",
        "date_created": "2021-01-07T07:59:57",
        "date_created_gmt": "2021-01-07T07:59:57",
        "date_modified": "2021-01-07T07:59:57",
        "date_modified_gmt": "2021-01-07T07:59:57",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\n<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>\n",
        "short_description": "<p>&#8220;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\n<p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>\n<p>&nbsp;</p>\n",
        "sku": "",
        "price": "20",
        "regular_price": "20",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 65,
                "name": "Vegetables &amp; Fruits",
                "slug": "vegetables-fruits"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 107,
                "date_created": "2021-01-07T08:00:07",
                "date_created_gmt": "2021-01-07T08:00:07",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/organicc-lettuce.png",
                "name": "organicc-lettuce.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;20,00</bdi></span>",
        "related_ids": [
            319,
            315,
            318,
            312,
            324
        ],
        "meta_data": [
            {
                "id": 1195,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/314"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 327,
        "name": "Pellentesque habitant morb",
        "slug": "pellentesque-habitant-morb",
        "permalink": "https://central-achat.alphanewgroup.com/product/pellentesque-habitant-morb/",
        "date_created": "2021-01-07T08:00:00",
        "date_created_gmt": "2021-01-07T08:00:00",
        "date_modified": "2021-01-07T08:00:00",
        "date_modified_gmt": "2021-01-07T08:00:00",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>This is a simple product.</p>\n",
        "sku": "woo-hoodie-with-logo",
        "price": "",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 42,
                "name": "Best Sellers",
                "slug": "best-sellers"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 122,
                "date_created": "2021-01-07T08:00:15",
                "date_created_gmt": "2021-01-07T08:00:15",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/p1.png",
                "name": "p1.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "",
        "related_ids": [
            341,
            336,
            343,
            332,
            344
        ],
        "meta_data": [
            {
                "id": 1491,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1494,
                "key": "woosw_count",
                "value": "4"
            },
            {
                "id": 1495,
                "key": "woosw_add",
                "value": "1628107501"
            },
            {
                "id": 1496,
                "key": "woosw_remove",
                "value": "1628107516"
            },
            {
                "id": 1497,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/327"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 336,
        "name": "Polo",
        "slug": "polo",
        "permalink": "https://central-achat.alphanewgroup.com/product/polo/",
        "date_created": "2021-01-07T08:00:19",
        "date_created_gmt": "2021-01-07T08:00:19",
        "date_modified": "2021-01-07T08:00:19",
        "date_modified_gmt": "2021-01-07T08:00:19",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "woo-polo",
        "price": "38",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 42,
                "name": "Best Sellers",
                "slug": "best-sellers"
            },
            {
                "id": 48,
                "name": "Clothing",
                "slug": "clothing"
            },
            {
                "id": 63,
                "name": "Sale Products",
                "slug": "sale-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 128,
                "date_created": "2021-01-07T08:00:26",
                "date_created_gmt": "2021-01-07T08:00:26",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/p17.png",
                "name": "p17.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 6,
                "name": "color",
                "slug": "pa_color",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "Black",
                    "Gray",
                    "Yellow"
                ]
            },
            {
                "id": 8,
                "name": "size",
                "slug": "pa_size",
                "position": 1,
                "visible": true,
                "variation": true,
                "options": [
                    "XL",
                    "XXL"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            366,
            367,
            368,
            370
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;38,00</bdi></span> &ndash; <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;98,00</bdi></span>",
        "related_ids": [
            331,
            334,
            337,
            343,
            326
        ],
        "meta_data": [
            {
                "id": 1711,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1715,
                "key": "woosw_count",
                "value": "11"
            },
            {
                "id": 1716,
                "key": "woosw_add",
                "value": "1628180060"
            },
            {
                "id": 1717,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": true,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/336"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 87,
        "name": "Premium Quality",
        "slug": "premium-quality",
        "permalink": "https://central-achat.alphanewgroup.com/product/premium-quality/",
        "date_created": "2024-01-21T00:30:37",
        "date_created_gmt": "2024-01-21T00:30:37",
        "date_modified": "2024-01-21T00:30:38",
        "date_modified_gmt": "2024-01-21T00:30:38",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>\n",
        "sku": "",
        "price": "21.99",
        "regular_price": "21.99",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 25,
                "name": "Uncategorized",
                "slug": "uncategorized"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 86,
                "date_created": "2024-01-21T00:30:36",
                "date_created_gmt": "2024-01-21T00:30:36",
                "date_modified": "2024-01-21T00:30:37",
                "date_modified_gmt": "2024-01-21T00:30:37",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/T_2_front.jpg",
                "name": "T_2_front.jpg",
                "alt": ""
            },
            {
                "id": 88,
                "date_created": "2024-01-21T00:30:37",
                "date_created_gmt": "2024-01-21T00:30:37",
                "date_modified": "2024-01-21T00:30:37",
                "date_modified_gmt": "2024-01-21T00:30:37",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/T_2_back.jpg",
                "name": "T_2_back.jpg",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;21,99</bdi></span>",
        "related_ids": [
            394
        ],
        "meta_data": [
            {
                "id": 355,
                "key": "pageview",
                "value": "3"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/87"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 337,
        "name": "Single",
        "slug": "single",
        "permalink": "https://central-achat.alphanewgroup.com/product/single/",
        "date_created": "2021-01-07T08:00:19",
        "date_created_gmt": "2021-01-07T08:00:19",
        "date_modified": "2021-01-07T08:00:19",
        "date_modified_gmt": "2021-01-07T08:00:19",
        "type": "simple",
        "status": "publish",
        "featured": true,
        "catalog_visibility": "visible",
        "description": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis orci ac odio dictum tincidunt. Donec ut metus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed luctus, dui eu sagittis sodales, nulla nibh sagittis augue, vel porttitor diam enim non metus. Vestibulum aliquam augue neque. Phasellus tincidunt odio eget ullamcorper efficitur. Cras placerat ut turpis pellentesque vulputate. Nam sed consequat tortor. Curabitur finibus sapien dolor. Ut eleifend tellus nec erat pulvinar dignissim. Nam non arcu purus. Vivamus et massa massa.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "woo-single",
        "price": "2",
        "regular_price": "3",
        "sale_price": "2",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": true,
        "downloadable": true,
        "downloads": [
            {
                "id": "a35a0239-5bbc-4b4f-86fa-79f99b0fe0f3",
                "name": "Single",
                "file": "https://demo.woothemes.com/woocommerce/wp-content/uploads/sites/56/2017/08/single.jpg"
            }
        ],
        "download_limit": 1,
        "download_expiry": 1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": false,
        "shipping_taxable": false,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 48,
                "name": "Clothing",
                "slug": "clothing"
            },
            {
                "id": 63,
                "name": "Sale Products",
                "slug": "sale-products"
            }
        ],
        "tags": [],
        "images": [],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;3,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;2,00</bdi></span></ins>",
        "related_ids": [
            326,
            335,
            333,
            325,
            341
        ],
        "meta_data": [
            {
                "id": 1738,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1745,
                "key": "woosw_count",
                "value": "1"
            },
            {
                "id": 1746,
                "key": "woosw_add",
                "value": "1620029984"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/337"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 323,
        "name": "Skin Care",
        "slug": "skin-care",
        "permalink": "https://central-achat.alphanewgroup.com/product/skin-care/",
        "date_created": "2021-01-07T07:59:59",
        "date_created_gmt": "2021-01-07T07:59:59",
        "date_modified": "2021-01-07T07:59:59",
        "date_modified_gmt": "2021-01-07T07:59:59",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,</p>\n<p>omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"</p>\n",
        "short_description": "<p>&#8220;At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis</p>\n<p>est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.&#8221;</p>\n",
        "sku": "",
        "price": "48",
        "regular_price": "60",
        "sale_price": "48",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            29
        ],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 58,
                "name": "Personal Care",
                "slug": "personal-care"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 117,
                "date_created": "2021-01-07T08:00:12",
                "date_created_gmt": "2021-01-07T08:00:12",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/skin-care.png",
                "name": "skin-care.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;60,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;48,00</bdi></span></ins>",
        "related_ids": [
            343,
            344,
            310,
            342,
            322
        ],
        "meta_data": [
            {
                "id": 1396,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1403,
                "key": "woosw_count",
                "value": "1"
            },
            {
                "id": 1404,
                "key": "woosw_add",
                "value": "1618792166"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/323"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 345,
        "name": "Soyabean",
        "slug": "soyabean",
        "permalink": "https://central-achat.alphanewgroup.com/product/soyabean/",
        "date_created": "2021-01-07T08:00:20",
        "date_created_gmt": "2021-01-07T08:00:20",
        "date_modified": "2021-01-07T08:00:20",
        "date_modified_gmt": "2021-01-07T08:00:20",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut</p>\n<p>labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"</p>\n",
        "short_description": "<p>&#8220;Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione</p>\n<p>voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?&#8221;</p>\n",
        "sku": "",
        "price": "80",
        "regular_price": "100",
        "sale_price": "80",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 51,
                "name": "FoodGrains",
                "slug": "foodgrains"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 134,
                "date_created": "2021-01-07T08:00:31",
                "date_created_gmt": "2021-01-07T08:00:31",
                "date_modified": "2024-01-21T00:45:39",
                "date_modified_gmt": "2024-01-21T00:45:39",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/food-gran-1.png",
                "name": "food-gran-1.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;100,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;80,00</bdi></span></ins>",
        "related_ids": [
            346,
            321,
            320
        ],
        "meta_data": [
            {
                "id": 1938,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1944,
                "key": "woosw_count",
                "value": "1"
            },
            {
                "id": 1945,
                "key": "woosw_add",
                "value": "1616697778"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/345"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 334,
        "name": "Sunglasses",
        "slug": "sunglasses",
        "permalink": "https://central-achat.alphanewgroup.com/product/sunglasses/",
        "date_created": "2021-01-07T08:00:19",
        "date_created_gmt": "2021-01-07T08:00:19",
        "date_modified": "2021-01-07T08:00:19",
        "date_modified_gmt": "2021-01-07T08:00:19",
        "type": "simple",
        "status": "publish",
        "featured": true,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "woo-sunglasses",
        "price": "90",
        "regular_price": "90",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 39,
                "name": "Accessories",
                "slug": "accessories"
            },
            {
                "id": 42,
                "name": "Best Sellers",
                "slug": "best-sellers"
            },
            {
                "id": 56,
                "name": "New Products",
                "slug": "new-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 126,
                "date_created": "2021-01-07T08:00:25",
                "date_created_gmt": "2021-01-07T08:00:25",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/product11.png",
                "name": "product11.png",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;90,00</bdi></span>",
        "related_ids": [
            332,
            341,
            336,
            325,
            326
        ],
        "meta_data": [
            {
                "id": 1661,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1666,
                "key": "woosw_count",
                "value": "9"
            },
            {
                "id": 1667,
                "key": "woosw_add",
                "value": "1628769504"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/334"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 340,
        "name": "T-Shirt with Log",
        "slug": "t-shirt-with-log",
        "permalink": "https://central-achat.alphanewgroup.com/product/t-shirt-with-log/",
        "date_created": "2021-01-07T08:00:20",
        "date_created_gmt": "2021-01-07T08:00:20",
        "date_modified": "2021-01-07T08:00:20",
        "date_modified_gmt": "2021-01-07T08:00:20",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "Woo-tshirt-logo-1",
        "price": "62",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 48,
                "name": "Clothing",
                "slug": "clothing"
            },
            {
                "id": 56,
                "name": "New Products",
                "slug": "new-products"
            },
            {
                "id": 63,
                "name": "Sale Products",
                "slug": "sale-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 131,
                "date_created": "2021-01-07T08:00:29",
                "date_created_gmt": "2021-01-07T08:00:29",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/p9.png",
                "name": "p9.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 6,
                "name": "color",
                "slug": "pa_color",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "Black",
                    "Gray",
                    "Yellow"
                ]
            },
            {
                "id": 8,
                "name": "size",
                "slug": "pa_size",
                "position": 1,
                "visible": true,
                "variation": true,
                "options": [
                    "L",
                    "M",
                    "XL"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            357,
            358,
            359,
            360,
            365
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;62,00</bdi></span> &ndash; <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;93,00</bdi></span>",
        "related_ids": [
            331,
            326,
            341,
            334,
            338
        ],
        "meta_data": [
            {
                "id": 1813,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1817,
                "key": "woosw_count",
                "value": "5"
            },
            {
                "id": 1818,
                "key": "woosw_add",
                "value": "1625929979"
            },
            {
                "id": 1825,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": true,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/340"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 338,
        "name": "T-Shirt with Logo",
        "slug": "t-shirt-with-logo",
        "permalink": "https://central-achat.alphanewgroup.com/product/t-shirt-with-logo/",
        "date_created": "2021-01-07T08:00:19",
        "date_created_gmt": "2021-01-07T08:00:19",
        "date_modified": "2021-01-07T08:00:19",
        "date_modified_gmt": "2021-01-07T08:00:19",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "sku": "Woo-tshirt-logo",
        "price": "88",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 42,
                "name": "Best Sellers",
                "slug": "best-sellers"
            },
            {
                "id": 48,
                "name": "Clothing",
                "slug": "clothing"
            },
            {
                "id": 56,
                "name": "New Products",
                "slug": "new-products"
            },
            {
                "id": 63,
                "name": "Sale Products",
                "slug": "sale-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 129,
                "date_created": "2021-01-07T08:00:28",
                "date_created_gmt": "2021-01-07T08:00:28",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/product7.png",
                "name": "product7.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 6,
                "name": "color",
                "slug": "pa_color",
                "position": 0,
                "visible": true,
                "variation": true,
                "options": [
                    "Black",
                    "Brown",
                    "Yellow"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            354,
            355,
            356
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<del aria-hidden=\"true\"><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;99,00</bdi></span></del> <ins><span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;88,00</bdi></span></ins>",
        "related_ids": [
            335,
            325,
            337,
            334,
            332
        ],
        "meta_data": [
            {
                "id": 1763,
                "key": "_wxr_import_user_slug",
                "value": ""
            },
            {
                "id": 1767,
                "key": "woosw_count",
                "value": "11"
            },
            {
                "id": 1768,
                "key": "woosw_add",
                "value": "1629439423"
            },
            {
                "id": 1769,
                "key": "big_store_sidebar_dyn",
                "value": "right"
            }
        ],
        "stock_status": "instock",
        "has_options": true,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/338"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 326,
        "name": "Vivamus maximus purus",
        "slug": "vivamus-maximus-purus",
        "permalink": "https://central-achat.alphanewgroup.com/product/vivamus-maximus-purus/",
        "date_created": "2021-01-07T07:59:59",
        "date_created_gmt": "2021-01-07T07:59:59",
        "date_modified": "2021-01-07T07:59:59",
        "date_modified_gmt": "2021-01-07T07:59:59",
        "type": "variable",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>\n",
        "short_description": "<p>This is a variable product.</p>\n",
        "sku": "woo-hoodie",
        "price": "42",
        "regular_price": "",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": true,
        "purchasable": false,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": 0,
        "download_expiry": 0,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [],
        "cross_sell_ids": [],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 39,
                "name": "Accessories",
                "slug": "accessories"
            },
            {
                "id": 63,
                "name": "Sale Products",
                "slug": "sale-products"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 121,
                "date_created": "2021-01-07T08:00:14",
                "date_created_gmt": "2021-01-07T08:00:14",
                "date_modified": "2024-01-21T00:45:38",
                "date_modified_gmt": "2024-01-21T00:45:38",
                "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/p2.png",
                "name": "p2.png",
                "alt": ""
            }
        ],
        "attributes": [
            {
                "id": 0,
                "name": "Logo",
                "slug": "Logo",
                "position": 1,
                "visible": true,
                "variation": true,
                "options": [
                    "Yes",
                    "No"
                ]
            }
        ],
        "default_attributes": [],
        "variations": [
            347,
            328,
            329,
            330
        ],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;42,00</bdi></span> &ndash; <span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>&nbsp;45,00</bdi></span>",
        "related_ids": [
            334,
            336,
            338,
            333,
            339
        ],
        "meta_data": [
            {
                "id": 1467,
                "key": "_wxr_import_user_slug",
                "value": "wpthemes"
            },
            {
                "id": 1473,
                "key": "woosw_count",
                "value": "1"
            },
            {
                "id": 1474,
                "key": "woosw_add",
                "value": "1623800271"
            }
        ],
        "stock_status": "outofstock",
        "has_options": true,
        "post_password": "",
        "jetpack_sharing_enabled": true,
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
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products/326"
                }
            ],
            "collection": [
                {
                    "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/products"
                }
            ]
        }
    }
]);


  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [currentProduct, setCurrentProduct] = useState(null)

  const TABLE_HEAD = [
    { id: 'name', label: 'Produit', alignRight: false },
    { id: 'date_created', label: 'Date de creation', alignRight: false },
    { id: 'price', label: 'Prix', alignRight: false },
    { id: 'stock_status', label: 'Stock', alignRight: false },
    { id: '' },
  ];

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function applySortFilter(array, comparator, query) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    return stabilizedThis.map((el) => el[0]);
  }


  const handleOpenMenu = (event, productObject) => {
    setOpen(event.currentTarget);
    setCurrentProduct(JSON.stringify(productObject))
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = products.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - products.length) : 0;

  const filteredUsers = applySortFilter(products, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  console.log("filteredUsers", filteredUsers);


  return (
    <>
      <Helmet>
        <title> TRANSFORME | Mes Produits </title>
      </Helmet>

      <Container >
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
          <Typography variant="h4" sx={{ mb: 1 }}>
            Mes Produits / Services
          </Typography>

          <LoadingButton sx={{ textTransform: "inherit" }} size="large" variant="contained"
            onClick={() => navigate('/dashboard/add-produit', { replace: true })}>
            Ajouter un produit / Service
          </LoadingButton>
        </Box>


        <Card>
          <ProductListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ProductListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={products.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    /* eslint-disable camelcase */

                    const { id, name,  date_created, price, categories, stock_status, images } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, name)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="2">
                          <Stack direction="row" alignItems="center" spacing={2}>
                          
                            <Avatar  variant="rounded" src={images[0]?.src} alt="photo URL" sx={{width: 100, height: 100}} />
                            <Box>
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                            <Typography variant="caption" noWrap>
                              {categories[0]?.name}
                            </Typography>
                            </Box>
                          </Stack>
                        </TableCell>

                         <TableCell align="left">{date_created}</TableCell>


                         <TableCell align="left">{price}</TableCell>

                        
                        <TableCell align="left"><Label color={(stock_status === 'outofstock' && 'error') || 'success'}>{stock_status}</Label> </TableCell>

                        
                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={(e)=>{
                              handleOpenMenu(e, row);
                            }}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                          Pas trouvé
                          </Typography>

                          <Typography variant="body2">
                            Aucun résultat trouvé pour &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Essayez de vérifier les fautes de frappe ou d'utiliser des mots complets.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}

              {loading && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <CircularProgress />
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>

      </Container>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem  onClick={()=> {
          console.log(currentProduct);
          const params = { productObject: currentProduct };
          navigate('/dashboard/view-produit',  { state: params });
        }}>
          <Iconify icon={'mdi:eye'} sx={{ mr: 2 }} />
          Voir Details
        </MenuItem>

        <MenuItem  onClick={()=> {
          console.log(currentProduct);
          // const params = { productObject: currentProduct };
          // navigate('/dashboard/ecole-details',  { state: params });
        }}>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Modifier
        </MenuItem>

        <MenuItem sx={{color:'red'}}  onClick={()=> {
          console.log(currentProduct);
          // const params = { productObject: currentProduct };
          // navigate('/dashboard/ecole-details',  { state: params });
        }}>
          <Iconify icon={'fluent:delete-32-filled'} sx={{ mr: 2 }} />
          Supprimer
        </MenuItem>
      </Popover>

    </>
  );
}
