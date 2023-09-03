SELECT b.category, SUM(s.sales) AS 'total_sales'
FROM book b JOIN book_sales s
ON b.book_id = s.book_id
WHERE DATE_FORMAT(s.sales_date, '%Y-%m') = '2022-01'
GROUP BY category
ORDER BY b.category