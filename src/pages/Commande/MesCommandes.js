import { Helmet } from 'react-helmet-async';
import React, { useEffect, useState } from 'react'
import { filter } from 'lodash';

// @mui
import {
    Container, Box, Typography, Card, TableContainer, Table, TableBody, TableRow, TableCell, Checkbox, Stack, IconButton, Paper, TablePagination, Avatar, CircularProgress, Popover, MenuItem,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import useWooCommerceAPI from '../../hooks/useWooCommerceAPI';
import { CommandeListHead, CommandeListToolbar } from '../../sections/@dashboard/product';

import Scrollbar from '../../components/scrollbar';
import Iconify from '../../components/iconify';
import Label from '../../components/label/Label';

export default function MesCommandes() {
    const navigate = useNavigate();
    // const [commandes, setCommandes] = useState([
    //     {
    //         "id": 432,
    //         "parent_id": 428,
    //         "status": "processing",
    //         "currency": "USD",
    //         "version": "8.5.2",
    //         "prices_include_tax": false,
    //         "date_created": "2024-01-31T14:39:57",
    //         "date_modified": "2024-01-31T15:32:10",
    //         "discount_total": "0.00",
    //         "discount_tax": "0.00",
    //         "shipping_total": "0.00",
    //         "shipping_tax": "0.00",
    //         "cart_tax": "0.00",
    //         "total": "287.50",
    //         "total_tax": "0.00",
    //         "customer_id": 20,
    //         "order_key": "wc_order_3YdPTgAMqrwpO",
    //         "billing": {
    //             "first_name": "Jean",
    //             "last_name": "jean",
    //             "company": "",
    //             "address_1": "12",
    //             "address_2": "",
    //             "city": "Kinshasa",
    //             "state": "RDC",
    //             "postcode": "061",
    //             "country": "CD",
    //             "email": "jean@test.com",
    //             "phone": ""
    //         },
    //         "shipping": {
    //             "first_name": "Jean",
    //             "last_name": "jean",
    //             "company": "",
    //             "address_1": "12",
    //             "address_2": "",
    //             "city": "Kinshasa",
    //             "state": "RDC",
    //             "postcode": "061",
    //             "country": "CD",
    //             "phone": ""
    //         },
    //         "payment_method": "",
    //         "payment_method_title": "",
    //         "transaction_id": "",
    //         "customer_ip_address": "196.250.112.207",
    //         "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    //         "created_via": "dokan",
    //         "customer_note": "",
    //         "date_completed": null,
    //         "date_paid": "2024-01-31T15:32:10",
    //         "cart_hash": "69184aaad44b5fe8015e980358d4f889",
    //         "number": "432",
    //         "meta_data": [
    //             {
    //                 "id": 163,
    //                 "key": "_dokan_vendor_id",
    //                 "value": "19"
    //             },
    //             {
    //                 "id": 166,
    //                 "key": "_wc_order_attribution_source_type",
    //                 "value": "admin"
    //             },
    //             {
    //                 "id": 167,
    //                 "key": "shipping_fee_recipient",
    //                 "value": "seller"
    //             },
    //             {
    //                 "id": 168,
    //                 "key": "tax_fee_recipient",
    //                 "value": "seller"
    //             },
    //             {
    //                 "id": 169,
    //                 "key": "shipping_tax_fee_recipient",
    //                 "value": "seller"
    //             }
    //         ],
    //         "line_items": [
    //             {
    //                 "id": 60,
    //                 "name": "Bath & Handwash",
    //                 "product_id": 310,
    //                 "variation_id": 0,
    //                 "quantity": 3,
    //                 "tax_class": "zero-rate",
    //                 "subtotal": "127.50",
    //                 "subtotal_tax": "0.00",
    //                 "total": "127.50",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 489,
    //                         "key": "_reduced_stock",
    //                         "value": "3",
    //                         "display_key": "_reduced_stock",
    //                         "display_value": "3"
    //                     },
    //                     {
    //                         "id": 506,
    //                         "key": "_dokan_commission_rate",
    //                         "value": "10",
    //                         "display_key": "_dokan_commission_rate",
    //                         "display_value": "10"
    //                     },
    //                     {
    //                         "id": 507,
    //                         "key": "_dokan_commission_type",
    //                         "value": "percentage",
    //                         "display_key": "_dokan_commission_type",
    //                         "display_value": "percentage"
    //                     },
    //                     {
    //                         "id": 508,
    //                         "key": "_dokan_additional_fee",
    //                         "value": "0",
    //                         "display_key": "_dokan_additional_fee",
    //                         "display_value": "0"
    //                     }
    //                 ],
    //                 "sku": "",
    //                 "price": 42.5,
    //                 "image": {
    //                     "id": "102",
    //                     "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/bath-handwash.png"
    //                 },
    //                 "parent_name": null
    //             },
    //             {
    //                 "id": 61,
    //                 "name": "Machine a coudre",
    //                 "product_id": 74,
    //                 "variation_id": 0,
    //                 "quantity": 2,
    //                 "tax_class": "",
    //                 "subtotal": "160.00",
    //                 "subtotal_tax": "0.00",
    //                 "total": "160.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 509,
    //                         "key": "_dokan_commission_rate",
    //                         "value": "10",
    //                         "display_key": "_dokan_commission_rate",
    //                         "display_value": "10"
    //                     },
    //                     {
    //                         "id": 510,
    //                         "key": "_dokan_commission_type",
    //                         "value": "percentage",
    //                         "display_key": "_dokan_commission_type",
    //                         "display_value": "percentage"
    //                     },
    //                     {
    //                         "id": 511,
    //                         "key": "_dokan_additional_fee",
    //                         "value": "0",
    //                         "display_key": "_dokan_additional_fee",
    //                         "display_value": "0"
    //                     }
    //                 ],
    //                 "sku": "Machine",
    //                 "price": 80,
    //                 "image": {
    //                     "id": "77",
    //                     "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/71ovE9ROJL._AC_CR0000_SX615_SY462_.jpg"
    //                 },
    //                 "parent_name": null
    //             }
    //         ],
    //         "tax_lines": [],
    //         "shipping_lines": [
    //             {
    //                 "id": 62,
    //                 "method_title": "Free shipping",
    //                 "method_id": "free_shipping",
    //                 "instance_id": "",
    //                 "total": "0.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 504,
    //                         "key": "Articles",
    //                         "value": "Bath & Handwash &times; 3, Machine a coudre &times; 2",
    //                         "display_key": "Articles",
    //                         "display_value": "Bath &amp; Handwash &times; 3, Machine a coudre &times; 2"
    //                     },
    //                     {
    //                         "id": 505,
    //                         "key": "seller_id",
    //                         "value": "19",
    //                         "display_key": "seller_id",
    //                         "display_value": "19"
    //                     }
    //                 ]
    //             }
    //         ],
    //         "fee_lines": [],
    //         "coupon_lines": [],
    //         "refunds": [],
    //         "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/432/?pay_for_order=true&key=wc_order_3YdPTgAMqrwpO",
    //         "is_editable": false,
    //         "needs_payment": false,
    //         "needs_processing": true,
    //         "date_created_gmt": "2024-01-31T14:39:57",
    //         "date_modified_gmt": "2024-01-31T15:32:10",
    //         "date_completed_gmt": null,
    //         "date_paid_gmt": "2024-01-31T15:32:10",
    //         "currency_symbol": "$",
    //         "stores": [
    //             {
    //                 "id": 19,
    //                 "name": "psd",
    //                 "shop_name": "Emart",
    //                 "url": "https://central-achat.alphanewgroup.com/store/psd/",
    //                 "address": {
    //                     "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
    //                     "street_2": "",
    //                     "city": "Kinshasa",
    //                     "zip": "",
    //                     "country": "CD",
    //                     "state": ""
    //                 }
    //             }
    //         ],
    //         "store": {
    //             "id": 19,
    //             "name": "psd",
    //             "shop_name": "Emart",
    //             "url": "https://central-achat.alphanewgroup.com/store/psd/",
    //             "address": {
    //                 "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
    //                 "street_2": "",
    //                 "city": "Kinshasa",
    //                 "zip": "",
    //                 "country": "CD",
    //                 "state": ""
    //             }
    //         },
    //         "_links": {
    //             "self": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/432"
    //                 }
    //             ],
    //             "collection": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
    //                 }
    //             ],
    //             "customer": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
    //                 }
    //             ],
    //             "up": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/428"
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         "id": 431,
    //         "parent_id": 428,
    //         "status": "processing",
    //         "currency": "USD",
    //         "version": "8.5.2",
    //         "prices_include_tax": false,
    //         "date_created": "2024-01-31T14:39:56",
    //         "date_modified": "2024-01-31T15:32:10",
    //         "discount_total": "0.00",
    //         "discount_tax": "0.00",
    //         "shipping_total": "0.00",
    //         "shipping_tax": "0.00",
    //         "cart_tax": "0.00",
    //         "total": "15.00",
    //         "total_tax": "0.00",
    //         "customer_id": 20,
    //         "order_key": "wc_order_EbBXORBwfgQUT",
    //         "billing": {
    //             "first_name": "Jean",
    //             "last_name": "jean",
    //             "company": "",
    //             "address_1": "12",
    //             "address_2": "",
    //             "city": "Kinshasa",
    //             "state": "RDC",
    //             "postcode": "061",
    //             "country": "CD",
    //             "email": "jean@test.com",
    //             "phone": ""
    //         },
    //         "shipping": {
    //             "first_name": "Jean",
    //             "last_name": "jean",
    //             "company": "",
    //             "address_1": "12",
    //             "address_2": "",
    //             "city": "Kinshasa",
    //             "state": "RDC",
    //             "postcode": "061",
    //             "country": "CD",
    //             "phone": ""
    //         },
    //         "payment_method": "",
    //         "payment_method_title": "",
    //         "transaction_id": "",
    //         "customer_ip_address": "196.250.112.207",
    //         "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    //         "created_via": "dokan",
    //         "customer_note": "",
    //         "date_completed": null,
    //         "date_paid": "2024-01-31T15:32:10",
    //         "cart_hash": "69184aaad44b5fe8015e980358d4f889",
    //         "number": "431",
    //         "meta_data": [
    //             {
    //                 "id": 156,
    //                 "key": "_dokan_vendor_id",
    //                 "value": "1"
    //             },
    //             {
    //                 "id": 159,
    //                 "key": "_wc_order_attribution_source_type",
    //                 "value": "admin"
    //             },
    //             {
    //                 "id": 160,
    //                 "key": "shipping_fee_recipient",
    //                 "value": "seller"
    //             },
    //             {
    //                 "id": 161,
    //                 "key": "tax_fee_recipient",
    //                 "value": "seller"
    //             },
    //             {
    //                 "id": 162,
    //                 "key": "shipping_tax_fee_recipient",
    //                 "value": "seller"
    //             }
    //         ],
    //         "line_items": [
    //             {
    //                 "id": 58,
    //                 "name": "alfajiri",
    //                 "product_id": 410,
    //                 "variation_id": 0,
    //                 "quantity": 1,
    //                 "tax_class": "",
    //                 "subtotal": "15.00",
    //                 "subtotal_tax": "0.00",
    //                 "total": "15.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 469,
    //                         "key": "_reduced_stock",
    //                         "value": "1",
    //                         "display_key": "_reduced_stock",
    //                         "display_value": "1"
    //                     },
    //                     {
    //                         "id": 477,
    //                         "key": "_dokan_commission_rate",
    //                         "value": "10",
    //                         "display_key": "_dokan_commission_rate",
    //                         "display_value": "10"
    //                     },
    //                     {
    //                         "id": 478,
    //                         "key": "_dokan_commission_type",
    //                         "value": "percentage",
    //                         "display_key": "_dokan_commission_type",
    //                         "display_value": "percentage"
    //                     },
    //                     {
    //                         "id": 479,
    //                         "key": "_dokan_additional_fee",
    //                         "value": "0",
    //                         "display_key": "_dokan_additional_fee",
    //                         "display_value": "0"
    //                     }
    //                 ],
    //                 "sku": "",
    //                 "price": 15,
    //                 "image": {
    //                     "id": "409",
    //                     "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/a6oxyyqn5llazlueufjv.jpg"
    //                 },
    //                 "parent_name": null
    //             }
    //         ],
    //         "tax_lines": [],
    //         "shipping_lines": [
    //             {
    //                 "id": 59,
    //                 "method_title": "Free shipping",
    //                 "method_id": "free_shipping",
    //                 "instance_id": "",
    //                 "total": "0.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 475,
    //                         "key": "Articles",
    //                         "value": "alfajiri &times; 1",
    //                         "display_key": "Articles",
    //                         "display_value": "alfajiri &times; 1"
    //                     },
    //                     {
    //                         "id": 476,
    //                         "key": "seller_id",
    //                         "value": "1",
    //                         "display_key": "seller_id",
    //                         "display_value": "1"
    //                     }
    //                 ]
    //             }
    //         ],
    //         "fee_lines": [],
    //         "coupon_lines": [],
    //         "refunds": [],
    //         "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/431/?pay_for_order=true&key=wc_order_EbBXORBwfgQUT",
    //         "is_editable": false,
    //         "needs_payment": false,
    //         "needs_processing": true,
    //         "date_created_gmt": "2024-01-31T14:39:56",
    //         "date_modified_gmt": "2024-01-31T15:32:10",
    //         "date_completed_gmt": null,
    //         "date_paid_gmt": "2024-01-31T15:32:10",
    //         "currency_symbol": "$",
    //         "stores": [
    //             {
    //                 "id": 1,
    //                 "name": "admin",
    //                 "shop_name": "Cirezi Food",
    //                 "url": "https://central-achat.alphanewgroup.com/store/admin/",
    //                 "address": {
    //                     "street_1": "Goma",
    //                     "street_2": "Himbi",
    //                     "city": "Goma",
    //                     "zip": "61",
    //                     "country": "CD",
    //                     "state": "Nord Kivu"
    //                 }
    //             }
    //         ],
    //         "store": {
    //             "id": 1,
    //             "name": "admin",
    //             "shop_name": "Cirezi Food",
    //             "url": "https://central-achat.alphanewgroup.com/store/admin/",
    //             "address": {
    //                 "street_1": "Goma",
    //                 "street_2": "Himbi",
    //                 "city": "Goma",
    //                 "zip": "61",
    //                 "country": "CD",
    //                 "state": "Nord Kivu"
    //             }
    //         },
    //         "_links": {
    //             "self": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/431"
    //                 }
    //             ],
    //             "collection": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
    //                 }
    //             ],
    //             "customer": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
    //                 }
    //             ],
    //             "up": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/428"
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         "id": 429,
    //         "parent_id": 0,
    //         "status": "processing",
    //         "currency": "USD",
    //         "version": "8.5.2",
    //         "prices_include_tax": false,
    //         "date_created": "2024-01-31T13:24:19",
    //         "date_modified": "2024-01-31T13:33:28",
    //         "discount_total": "0.00",
    //         "discount_tax": "0.00",
    //         "shipping_total": "0.00",
    //         "shipping_tax": "0.00",
    //         "cart_tax": "0.00",
    //         "total": "250.00",
    //         "total_tax": "0.00",
    //         "customer_id": 15,
    //         "order_key": "wc_order_Pt6s3EnUcLT3l",
    //         "billing": {
    //             "first_name": "Pm",
    //             "last_name": "pm",
    //             "company": "",
    //             "address_1": "12",
    //             "address_2": "",
    //             "city": "Goma",
    //             "state": "NK",
    //             "postcode": "0091",
    //             "country": "CD",
    //             "email": "pme@test.com",
    //             "phone": ""
    //         },
    //         "shipping": {
    //             "first_name": "Pm",
    //             "last_name": "pm",
    //             "company": "",
    //             "address_1": "12",
    //             "address_2": "",
    //             "city": "Goma",
    //             "state": "NK",
    //             "postcode": "0091",
    //             "country": "CD",
    //             "phone": ""
    //         },
    //         "payment_method": "cod",
    //         "payment_method_title": "Cash on delivery",
    //         "transaction_id": "",
    //         "customer_ip_address": "196.250.112.207",
    //         "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    //         "created_via": "store-api",
    //         "customer_note": "",
    //         "date_completed": null,
    //         "date_paid": null,
    //         "cart_hash": "146a0e2b429205d00f5b7259434cf928",
    //         "number": "429",
    //         "meta_data": [
    //             {
    //                 "id": 136,
    //                 "key": "_shipping_hash",
    //                 "value": "9d4568c009d203ab10e33ea9953a0264"
    //             },
    //             {
    //                 "id": 137,
    //                 "key": "_coupons_hash",
    //                 "value": "d751713988987e9331980363e24189ce"
    //             },
    //             {
    //                 "id": 138,
    //                 "key": "_fees_hash",
    //                 "value": "d751713988987e9331980363e24189ce"
    //             },
    //             {
    //                 "id": 139,
    //                 "key": "_taxes_hash",
    //                 "value": "d751713988987e9331980363e24189ce"
    //             },
    //             {
    //                 "id": 140,
    //                 "key": "is_vat_exempt",
    //                 "value": "no"
    //             },
    //             {
    //                 "id": 143,
    //                 "key": "_wc_order_attribution_source_type",
    //                 "value": "typein"
    //             },
    //             {
    //                 "id": 144,
    //                 "key": "_wc_order_attribution_utm_source",
    //                 "value": "(direct)"
    //             },
    //             {
    //                 "id": 145,
    //                 "key": "_wc_order_attribution_session_entry",
    //                 "value": "https://central-achat.alphanewgroup.com/"
    //             },
    //             {
    //                 "id": 146,
    //                 "key": "_wc_order_attribution_session_start_time",
    //                 "value": "2024-01-31 13:17:10"
    //             },
    //             {
    //                 "id": 147,
    //                 "key": "_wc_order_attribution_session_pages",
    //                 "value": "7"
    //             },
    //             {
    //                 "id": 148,
    //                 "key": "_wc_order_attribution_session_count",
    //                 "value": "1"
    //             },
    //             {
    //                 "id": 149,
    //                 "key": "_wc_order_attribution_user_agent",
    //                 "value": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
    //             },
    //             {
    //                 "id": 150,
    //                 "key": "_wc_order_attribution_device_type",
    //                 "value": "Desktop"
    //             },
    //             {
    //                 "id": 151,
    //                 "key": "_dokan_vendor_id",
    //                 "value": "19"
    //             },
    //             {
    //                 "id": 152,
    //                 "key": "shipping_fee_recipient",
    //                 "value": "seller"
    //             },
    //             {
    //                 "id": 153,
    //                 "key": "tax_fee_recipient",
    //                 "value": "seller"
    //             },
    //             {
    //                 "id": 154,
    //                 "key": "shipping_tax_fee_recipient",
    //                 "value": "seller"
    //             }
    //         ],
    //         "line_items": [
    //             {
    //                 "id": 48,
    //                 "name": "Machine a coudre",
    //                 "product_id": 74,
    //                 "variation_id": 0,
    //                 "quantity": 3,
    //                 "tax_class": "",
    //                 "subtotal": "240.00",
    //                 "subtotal_tax": "0.00",
    //                 "total": "240.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 451,
    //                         "key": "_dokan_commission_rate",
    //                         "value": "10",
    //                         "display_key": "_dokan_commission_rate",
    //                         "display_value": "10"
    //                     },
    //                     {
    //                         "id": 452,
    //                         "key": "_dokan_commission_type",
    //                         "value": "percentage",
    //                         "display_key": "_dokan_commission_type",
    //                         "display_value": "percentage"
    //                     },
    //                     {
    //                         "id": 453,
    //                         "key": "_dokan_additional_fee",
    //                         "value": "0",
    //                         "display_key": "_dokan_additional_fee",
    //                         "display_value": "0"
    //                     }
    //                 ],
    //                 "sku": "Machine",
    //                 "price": 80,
    //                 "image": {
    //                     "id": "77",
    //                     "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/71ovE9ROJL._AC_CR0000_SX615_SY462_.jpg"
    //                 },
    //                 "parent_name": null
    //             },
    //             {
    //                 "id": 49,
    //                 "name": "EASTPAK Padded Pak'R Sac à Dos",
    //                 "product_id": 423,
    //                 "variation_id": 0,
    //                 "quantity": 2,
    //                 "tax_class": "",
    //                 "subtotal": "10.00",
    //                 "subtotal_tax": "0.00",
    //                 "total": "10.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 454,
    //                         "key": "_dokan_commission_rate",
    //                         "value": "10",
    //                         "display_key": "_dokan_commission_rate",
    //                         "display_value": "10"
    //                     },
    //                     {
    //                         "id": 455,
    //                         "key": "_dokan_commission_type",
    //                         "value": "percentage",
    //                         "display_key": "_dokan_commission_type",
    //                         "display_value": "percentage"
    //                     },
    //                     {
    //                         "id": 456,
    //                         "key": "_dokan_additional_fee",
    //                         "value": "0",
    //                         "display_key": "_dokan_additional_fee",
    //                         "display_value": "0"
    //                     },
    //                     {
    //                         "id": 457,
    //                         "key": "_reduced_stock",
    //                         "value": "2",
    //                         "display_key": "_reduced_stock",
    //                         "display_value": "2"
    //                     }
    //                 ],
    //                 "sku": "",
    //                 "price": 5,
    //                 "image": {
    //                     "id": "422",
    //                     "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/grfjjoipwtwcte7u2yew.jpg"
    //                 },
    //                 "parent_name": null
    //             }
    //         ],
    //         "tax_lines": [],
    //         "shipping_lines": [
    //             {
    //                 "id": 57,
    //                 "method_title": "Free shipping",
    //                 "method_id": "free_shipping",
    //                 "instance_id": "1",
    //                 "total": "0.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 449,
    //                         "key": "Articles",
    //                         "value": "Machine a coudre &times; 3, EASTPAK Padded Pak'R Sac à Dos &times; 2",
    //                         "display_key": "Articles",
    //                         "display_value": "Machine a coudre &times; 3, EASTPAK Padded Pak'R Sac à Dos &times; 2"
    //                     },
    //                     {
    //                         "id": 450,
    //                         "key": "seller_id",
    //                         "value": "19",
    //                         "display_key": "seller_id",
    //                         "display_value": "19"
    //                     }
    //                 ]
    //             }
    //         ],
    //         "fee_lines": [],
    //         "coupon_lines": [],
    //         "refunds": [],
    //         "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/429/?pay_for_order=true&key=wc_order_Pt6s3EnUcLT3l",
    //         "is_editable": false,
    //         "needs_payment": false,
    //         "needs_processing": true,
    //         "date_created_gmt": "2024-01-31T13:24:19",
    //         "date_modified_gmt": "2024-01-31T13:33:28",
    //         "date_completed_gmt": null,
    //         "date_paid_gmt": null,
    //         "currency_symbol": "$",
    //         "stores": [
    //             {
    //                 "id": 19,
    //                 "name": "psd",
    //                 "shop_name": "Emart",
    //                 "url": "https://central-achat.alphanewgroup.com/store/psd/",
    //                 "address": {
    //                     "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
    //                     "street_2": "",
    //                     "city": "Kinshasa",
    //                     "zip": "",
    //                     "country": "CD",
    //                     "state": ""
    //                 }
    //             }
    //         ],
    //         "store": {
    //             "id": 19,
    //             "name": "psd",
    //             "shop_name": "Emart",
    //             "url": "https://central-achat.alphanewgroup.com/store/psd/",
    //             "address": {
    //                 "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
    //                 "street_2": "",
    //                 "city": "Kinshasa",
    //                 "zip": "",
    //                 "country": "CD",
    //                 "state": ""
    //             }
    //         },
    //         "_links": {
    //             "self": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/429"
    //                 }
    //             ],
    //             "collection": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
    //                 }
    //             ],
    //             "customer": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/15"
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         "id": 428,
    //         "parent_id": 0,
    //         "status": "processing",
    //         "currency": "USD",
    //         "version": "8.5.2",
    //         "prices_include_tax": false,
    //         "date_created": "2024-01-31T13:14:25",
    //         "date_modified": "2024-01-31T15:32:10",
    //         "discount_total": "0.00",
    //         "discount_tax": "0.00",
    //         "shipping_total": "0.00",
    //         "shipping_tax": "0.00",
    //         "cart_tax": "0.00",
    //         "total": "302.50",
    //         "total_tax": "0.00",
    //         "customer_id": 20,
    //         "order_key": "wc_order_hJsO0zCVPcQ4f",
    //         "billing": {
    //             "first_name": "Jean",
    //             "last_name": "jean",
    //             "company": "",
    //             "address_1": "12",
    //             "address_2": "",
    //             "city": "Kinshasa",
    //             "state": "RDC",
    //             "postcode": "061",
    //             "country": "CD",
    //             "email": "jean@test.com",
    //             "phone": ""
    //         },
    //         "shipping": {
    //             "first_name": "Jean",
    //             "last_name": "jean",
    //             "company": "",
    //             "address_1": "12",
    //             "address_2": "",
    //             "city": "Kinshasa",
    //             "state": "RDC",
    //             "postcode": "061",
    //             "country": "CD",
    //             "phone": ""
    //         },
    //         "payment_method": "",
    //         "payment_method_title": "",
    //         "transaction_id": "",
    //         "customer_ip_address": "196.250.112.207",
    //         "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    //         "created_via": "store-api",
    //         "customer_note": "",
    //         "date_completed": null,
    //         "date_paid": "2024-01-31T15:32:10",
    //         "cart_hash": "69184aaad44b5fe8015e980358d4f889",
    //         "number": "428",
    //         "meta_data": [
    //             {
    //                 "id": 129,
    //                 "key": "_shipping_hash",
    //                 "value": "9d4568c009d203ab10e33ea9953a0264"
    //             },
    //             {
    //                 "id": 130,
    //                 "key": "_coupons_hash",
    //                 "value": "d751713988987e9331980363e24189ce"
    //             },
    //             {
    //                 "id": 131,
    //                 "key": "_fees_hash",
    //                 "value": "d751713988987e9331980363e24189ce"
    //             },
    //             {
    //                 "id": 132,
    //                 "key": "_taxes_hash",
    //                 "value": "d751713988987e9331980363e24189ce"
    //             },
    //             {
    //                 "id": 133,
    //                 "key": "is_vat_exempt",
    //                 "value": "no"
    //             },
    //             {
    //                 "id": 155,
    //                 "key": "has_sub_order",
    //                 "value": "1"
    //             }
    //         ],
    //         "line_items": [
    //             {
    //                 "id": 43,
    //                 "name": "alfajiri",
    //                 "product_id": 410,
    //                 "variation_id": 0,
    //                 "quantity": 1,
    //                 "tax_class": "",
    //                 "subtotal": "15.00",
    //                 "subtotal_tax": "0.00",
    //                 "total": "15.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 458,
    //                         "key": "_reduced_stock",
    //                         "value": "1",
    //                         "display_key": "_reduced_stock",
    //                         "display_value": "1"
    //                     }
    //                 ],
    //                 "sku": "",
    //                 "price": 15,
    //                 "image": {
    //                     "id": "409",
    //                     "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/a6oxyyqn5llazlueufjv.jpg"
    //                 },
    //                 "parent_name": null
    //             },
    //             {
    //                 "id": 44,
    //                 "name": "Bath & Handwash",
    //                 "product_id": 310,
    //                 "variation_id": 0,
    //                 "quantity": 3,
    //                 "tax_class": "zero-rate",
    //                 "subtotal": "127.50",
    //                 "subtotal_tax": "0.00",
    //                 "total": "127.50",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 459,
    //                         "key": "_reduced_stock",
    //                         "value": "3",
    //                         "display_key": "_reduced_stock",
    //                         "display_value": "3"
    //                     }
    //                 ],
    //                 "sku": "",
    //                 "price": 42.5,
    //                 "image": {
    //                     "id": "102",
    //                     "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2021/01/bath-handwash.png"
    //                 },
    //                 "parent_name": null
    //             },
    //             {
    //                 "id": 45,
    //                 "name": "Machine a coudre",
    //                 "product_id": 74,
    //                 "variation_id": 0,
    //                 "quantity": 2,
    //                 "tax_class": "",
    //                 "subtotal": "160.00",
    //                 "subtotal_tax": "0.00",
    //                 "total": "160.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [],
    //                 "sku": "Machine",
    //                 "price": 80,
    //                 "image": {
    //                     "id": "77",
    //                     "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/71ovE9ROJL._AC_CR0000_SX615_SY462_.jpg"
    //                 },
    //                 "parent_name": null
    //             }
    //         ],
    //         "tax_lines": [],
    //         "shipping_lines": [
    //             {
    //                 "id": 46,
    //                 "method_title": "Free shipping",
    //                 "method_id": "free_shipping",
    //                 "instance_id": "1",
    //                 "total": "0.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 368,
    //                         "key": "Articles",
    //                         "value": "alfajiri &times; 1",
    //                         "display_key": "Articles",
    //                         "display_value": "alfajiri &times; 1"
    //                     },
    //                     {
    //                         "id": 369,
    //                         "key": "seller_id",
    //                         "value": "1",
    //                         "display_key": "seller_id",
    //                         "display_value": "1"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": 47,
    //                 "method_title": "Free shipping",
    //                 "method_id": "free_shipping",
    //                 "instance_id": "1",
    //                 "total": "0.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 375,
    //                         "key": "Articles",
    //                         "value": "Bath & Handwash &times; 3, Machine a coudre &times; 2",
    //                         "display_key": "Articles",
    //                         "display_value": "Bath &amp; Handwash &times; 3, Machine a coudre &times; 2"
    //                     },
    //                     {
    //                         "id": 376,
    //                         "key": "seller_id",
    //                         "value": "19",
    //                         "display_key": "seller_id",
    //                         "display_value": "19"
    //                     }
    //                 ]
    //             }
    //         ],
    //         "fee_lines": [],
    //         "coupon_lines": [],
    //         "refunds": [],
    //         "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/428/?pay_for_order=true&key=wc_order_hJsO0zCVPcQ4f",
    //         "is_editable": false,
    //         "needs_payment": false,
    //         "needs_processing": true,
    //         "date_created_gmt": "2024-01-31T13:14:25",
    //         "date_modified_gmt": "2024-01-31T15:32:10",
    //         "date_completed_gmt": null,
    //         "date_paid_gmt": "2024-01-31T15:32:10",
    //         "currency_symbol": "$",
    //         "stores": [
    //             {
    //                 "id": 1,
    //                 "name": "admin",
    //                 "shop_name": "Cirezi Food",
    //                 "url": "https://central-achat.alphanewgroup.com/store/admin/",
    //                 "address": {
    //                     "street_1": "Goma",
    //                     "street_2": "Himbi",
    //                     "city": "Goma",
    //                     "zip": "61",
    //                     "country": "CD",
    //                     "state": "Nord Kivu"
    //                 }
    //             },
    //             {
    //                 "id": 19,
    //                 "name": "psd",
    //                 "shop_name": "Emart",
    //                 "url": "https://central-achat.alphanewgroup.com/store/psd/",
    //                 "address": {
    //                     "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
    //                     "street_2": "",
    //                     "city": "Kinshasa",
    //                     "zip": "",
    //                     "country": "CD",
    //                     "state": ""
    //                 }
    //             }
    //         ],
    //         "store": [],
    //         "_links": {
    //             "self": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/428"
    //                 }
    //             ],
    //             "collection": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
    //                 }
    //             ],
    //             "customer": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         "id": 427,
    //         "parent_id": 0,
    //         "status": "processing",
    //         "currency": "USD",
    //         "version": "8.5.2",
    //         "prices_include_tax": false,
    //         "date_created": "2024-01-31T13:03:00",
    //         "date_modified": "2024-01-31T13:12:53",
    //         "discount_total": "0.00",
    //         "discount_tax": "0.00",
    //         "shipping_total": "0.00",
    //         "shipping_tax": "0.00",
    //         "cart_tax": "0.00",
    //         "total": "5.00",
    //         "total_tax": "0.00",
    //         "customer_id": 20,
    //         "order_key": "wc_order_b9ofMG1ZsCczx",
    //         "billing": {
    //             "first_name": "Jean",
    //             "last_name": "jean",
    //             "company": "",
    //             "address_1": "12",
    //             "address_2": "",
    //             "city": "Kinshasa",
    //             "state": "RDC",
    //             "postcode": "061",
    //             "country": "CD",
    //             "email": "jean@test.com",
    //             "phone": ""
    //         },
    //         "shipping": {
    //             "first_name": "Jean",
    //             "last_name": "jean",
    //             "company": "",
    //             "address_1": "12",
    //             "address_2": "",
    //             "city": "Kinshasa",
    //             "state": "RDC",
    //             "postcode": "061",
    //             "country": "CD",
    //             "phone": ""
    //         },
    //         "payment_method": "cod",
    //         "payment_method_title": "Cash on delivery",
    //         "transaction_id": "",
    //         "customer_ip_address": "196.250.112.207",
    //         "customer_user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
    //         "created_via": "store-api",
    //         "customer_note": "",
    //         "date_completed": null,
    //         "date_paid": null,
    //         "cart_hash": "b09657bde71df38a1722e0c0204ebe32",
    //         "number": "427",
    //         "meta_data": [
    //             {
    //                 "id": 110,
    //                 "key": "_shipping_hash",
    //                 "value": "9d4568c009d203ab10e33ea9953a0264"
    //             },
    //             {
    //                 "id": 111,
    //                 "key": "_coupons_hash",
    //                 "value": "d751713988987e9331980363e24189ce"
    //             },
    //             {
    //                 "id": 112,
    //                 "key": "_fees_hash",
    //                 "value": "d751713988987e9331980363e24189ce"
    //             },
    //             {
    //                 "id": 113,
    //                 "key": "_taxes_hash",
    //                 "value": "d751713988987e9331980363e24189ce"
    //             },
    //             {
    //                 "id": 114,
    //                 "key": "is_vat_exempt",
    //                 "value": "no"
    //             },
    //             {
    //                 "id": 117,
    //                 "key": "_wc_order_attribution_source_type",
    //                 "value": "typein"
    //             },
    //             {
    //                 "id": 118,
    //                 "key": "_wc_order_attribution_utm_source",
    //                 "value": "(direct)"
    //             },
    //             {
    //                 "id": 119,
    //                 "key": "_wc_order_attribution_session_entry",
    //                 "value": "https://central-achat.alphanewgroup.com/"
    //             },
    //             {
    //                 "id": 120,
    //                 "key": "_wc_order_attribution_session_start_time",
    //                 "value": "2024-01-31 13:01:28"
    //             },
    //             {
    //                 "id": 121,
    //                 "key": "_wc_order_attribution_session_pages",
    //                 "value": "5"
    //             },
    //             {
    //                 "id": 122,
    //                 "key": "_wc_order_attribution_session_count",
    //                 "value": "1"
    //             },
    //             {
    //                 "id": 123,
    //                 "key": "_wc_order_attribution_user_agent",
    //                 "value": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
    //             },
    //             {
    //                 "id": 124,
    //                 "key": "_wc_order_attribution_device_type",
    //                 "value": "Desktop"
    //             },
    //             {
    //                 "id": 125,
    //                 "key": "_dokan_vendor_id",
    //                 "value": "19"
    //             },
    //             {
    //                 "id": 126,
    //                 "key": "shipping_fee_recipient",
    //                 "value": "seller"
    //             },
    //             {
    //                 "id": 127,
    //                 "key": "tax_fee_recipient",
    //                 "value": "seller"
    //             },
    //             {
    //                 "id": 128,
    //                 "key": "shipping_tax_fee_recipient",
    //                 "value": "seller"
    //             }
    //         ],
    //         "line_items": [
    //             {
    //                 "id": 39,
    //                 "name": "EASTPAK Padded Pak'R Sac à Dos",
    //                 "product_id": 423,
    //                 "variation_id": 0,
    //                 "quantity": 1,
    //                 "tax_class": "",
    //                 "subtotal": "5.00",
    //                 "subtotal_tax": "0.00",
    //                 "total": "5.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 332,
    //                         "key": "_dokan_commission_rate",
    //                         "value": "10",
    //                         "display_key": "_dokan_commission_rate",
    //                         "display_value": "10"
    //                     },
    //                     {
    //                         "id": 333,
    //                         "key": "_dokan_commission_type",
    //                         "value": "percentage",
    //                         "display_key": "_dokan_commission_type",
    //                         "display_value": "percentage"
    //                     },
    //                     {
    //                         "id": 334,
    //                         "key": "_dokan_additional_fee",
    //                         "value": "0",
    //                         "display_key": "_dokan_additional_fee",
    //                         "display_value": "0"
    //                     },
    //                     {
    //                         "id": 335,
    //                         "key": "_reduced_stock",
    //                         "value": "1",
    //                         "display_key": "_reduced_stock",
    //                         "display_value": "1"
    //                     }
    //                 ],
    //                 "sku": "",
    //                 "price": 5,
    //                 "image": {
    //                     "id": "422",
    //                     "src": "https://central-achat.alphanewgroup.com/wp-content/uploads/2024/01/grfjjoipwtwcte7u2yew.jpg"
    //                 },
    //                 "parent_name": null
    //             }
    //         ],
    //         "tax_lines": [],
    //         "shipping_lines": [
    //             {
    //                 "id": 42,
    //                 "method_title": "Free shipping",
    //                 "method_id": "free_shipping",
    //                 "instance_id": "1",
    //                 "total": "0.00",
    //                 "total_tax": "0.00",
    //                 "taxes": [],
    //                 "meta_data": [
    //                     {
    //                         "id": 330,
    //                         "key": "Articles",
    //                         "value": "EASTPAK Padded Pak'R Sac à Dos &times; 1",
    //                         "display_key": "Articles",
    //                         "display_value": "EASTPAK Padded Pak'R Sac à Dos &times; 1"
    //                     },
    //                     {
    //                         "id": 331,
    //                         "key": "seller_id",
    //                         "value": "19",
    //                         "display_key": "seller_id",
    //                         "display_value": "19"
    //                     }
    //                 ]
    //             }
    //         ],
    //         "fee_lines": [],
    //         "coupon_lines": [],
    //         "refunds": [],
    //         "payment_url": "https://central-achat.alphanewgroup.com/checkout/order-pay/427/?pay_for_order=true&key=wc_order_b9ofMG1ZsCczx",
    //         "is_editable": false,
    //         "needs_payment": false,
    //         "needs_processing": true,
    //         "date_created_gmt": "2024-01-31T13:03:00",
    //         "date_modified_gmt": "2024-01-31T13:12:53",
    //         "date_completed_gmt": null,
    //         "date_paid_gmt": null,
    //         "currency_symbol": "$",
    //         "stores": [
    //             {
    //                 "id": 19,
    //                 "name": "psd",
    //                 "shop_name": "Emart",
    //                 "url": "https://central-achat.alphanewgroup.com/store/psd/",
    //                 "address": {
    //                     "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
    //                     "street_2": "",
    //                     "city": "Kinshasa",
    //                     "zip": "",
    //                     "country": "CD",
    //                     "state": ""
    //                 }
    //             }
    //         ],
    //         "store": {
    //             "id": 19,
    //             "name": "psd",
    //             "shop_name": "Emart",
    //             "url": "https://central-achat.alphanewgroup.com/store/psd/",
    //             "address": {
    //                 "street_1": "N°1 Av. OUA, Basoko GB, Ngaliema – Concession Procoki, Kinshasa, RDC",
    //                 "street_2": "",
    //                 "city": "Kinshasa",
    //                 "zip": "",
    //                 "country": "CD",
    //                 "state": ""
    //             }
    //         },
    //         "_links": {
    //             "self": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders/427"
    //                 }
    //             ],
    //             "collection": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/orders"
    //                 }
    //             ],
    //             "customer": [
    //                 {
    //                     "href": "https://central-achat.alphanewgroup.com/wp-json/wc/v3/customers/20"
    //                 }
    //             ]
    //         }
    //     }
    // ])
    const {
        commandes,
        loading,
        customers,
        fetchCommandes
        // error,
    } = useWooCommerceAPI();

    //  react-hooks/exhaustive-deps
    useEffect(() => {
        fetchCommandes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(commandes);
    const [open, setOpen] = useState(null);

    const [page, setPage] = useState(0);

    const [order, setOrder] = useState('asc');

    const [selected, setSelected] = useState([]);

    const [orderBy, setOrderBy] = useState('number');

    const [filterNumber, setFilterNumber] = useState('');

    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [currentCommamnde, setCurrentCommamnde] = useState(null)

    const TABLE_HEAD = [
        { id: 'number', label: 'number', alignRight: false },
        { id: 'customer_id', label: 'customer_id', alignRight: false },
        { id: 'date_created', label: 'date_created', alignRight: false },
        { id: 'total', label: 'total', alignRight: false },
        { id: 'line_items', label: 'line_items', alignRight: false },
        { id: 'status', label: 'status', alignRight: false },
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
            return filter(array, (_user) => _user.number.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        }
        return stabilizedThis.map((el) => el[0]);
    }

    const handleOpenMenu = (event, commandeObject) => {
        setOpen(event.currentTarget);
        setCurrentCommamnde(JSON.stringify(commandeObject))
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
            const newSelecteds = commandes.map((n) => n.number);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, number) => {
        const selectedIndex = selected.indexOf(number);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, number);
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
        setFilterNumber(event.target.value);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - commandes.length) : 0;

    const filteredCommandes = applySortFilter(commandes, getComparator(order, orderBy), filterNumber);

    const isNotFound = !filteredCommandes.length && !!filterNumber;

    return (
        <>
            <Helmet>
                <title> TRANSFORME | Mes Commandes </title>
            </Helmet>

            <Container >
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", marginBottom: 5 }} >
                    <Typography variant="h4" sx={{ mb: 1 }}>
                        Mes Commandes
                    </Typography>
                </Box>

                <Card>
                    <CommandeListToolbar numSelected={selected.length} filterNumber={filterNumber} onFilterNumber={handleFilterByName} />

                    <Scrollbar>
                        <TableContainer sx={{ minWidth: 800 }}>
                            <Table>
                                <CommandeListHead
                                    order={order}
                                    orderBy={orderBy}
                                    headLabel={TABLE_HEAD}
                                    rowCount={commandes.length}
                                    numSelected={selected.length}
                                    onRequestSort={handleRequestSort}
                                    onSelectAllClick={handleSelectAllClick}
                                />
                                <TableBody>
                                    {filteredCommandes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                        /* eslint-disable camelcase */

                                        const { id, number, customer_id, date_created, total, line_items, status, parent_id, currency } = row;

                                        const selectedOrder = selected.indexOf(number) !== -1;
                                        const selectedUser = customers.find((cus) => cus.id === customer_id);

                                        const foundsParent = filteredCommandes.find((parent) => (parent.parent_id === id));
                                        console.log("foundsParent", foundsParent);

                                        return (

                                            <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedOrder}>
                                                <TableCell padding="checkbox">
                                                    <Checkbox checked={selectedOrder} onChange={(event) => handleClick(event, number)} />
                                                </TableCell>

                                                <TableCell align="left"># N°{parent_id===0 ? number:  `${number} sous ${parent_id}`}</TableCell>


                                                <TableCell component="th" scope="row" padding="2">
                                                    <Stack direction="row" alignItems="center" spacing={2}>

                                                        <Avatar src={selectedUser?.avatar_url} variant="circular" alt="photo URL" />
                                                        <Box>
                                                            <Typography variant="subtitle2" noWrap>
                                                                {selectedUser?.username ? selectedUser?.username : "Visiteur"}
                                                            </Typography>
                                                            <Typography variant="caption" noWrap>
                                                                {selectedUser?.email ? selectedUser?.email : ""}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>
                                                </TableCell>

                                                <TableCell align="left">{date_created} </TableCell>

                                                <TableCell align="left">{total} {currency}</TableCell>
                                                <TableCell align="left">{line_items?.length}</TableCell>

                                                {!foundsParent ?
                                                    <TableCell align="left"><Label color={(status === 'outofstock' && 'error') || 'success'}>{status}</Label> </TableCell>:
                                                    <TableCell align="left"><Label variant="ghost" color="default" >Commande groupee</Label> </TableCell>
                                                }

                                                {!foundsParent && 
                                                <TableCell align="right">
                                                    <IconButton size="large" color="inherit" onClick={(e) => {
                                                        handleOpenMenu(e, row);
                                                    }}>
                                                        <Iconify icon={'eva:more-vertical-fill'} />
                                                    </IconButton>
                                                </TableCell>}
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
                                                        <strong>&quot;{filterNumber}&quot;</strong>.
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
                        count={commandes.length}
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
                <MenuItem onClick={() => {
                    // console.log(currentCommamnde);
                    const params = { commandeObject: currentCommamnde, customers };
                    navigate('/dashboard/view-commande', { state: params });
                }}>
                    <Iconify icon={'mdi:eye'} sx={{ mr: 2 }} />
                    Voir Details
                </MenuItem>


            </Popover>

        </>
    );
}
