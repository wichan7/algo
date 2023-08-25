SELECT category, count(*)
FROM (
    SELECT product_id, SUBSTRING(product_code, 1, 2) as category
    FROM product
) p
GROUP BY category