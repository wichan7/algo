SELECT order_id,
       product_id,
       DATE_FORMAT(out_date, '%Y-%m-%d'),
       CASE WHEN out_date IS NULL THEN '출고미정'
            WHEN DATE_FORMAT(out_date, '%Y-%m-%d') <= '2022-05-01' THEN '출고완료'
            ELSE '출고대기' END AS '출고완료'
FROM food_order
ORDER BY order_id