SELECT p.product_code as 'PRODUCT_CODE', SUM(p.price * o.sales_amount) as 'SALES'
FROM product p, offline_sale o
WHERE p.product_id = o.product_id
GROUP BY p.product_code
ORDER BY sales desc, p.product_code asc