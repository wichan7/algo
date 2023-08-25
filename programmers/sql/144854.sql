SELECT b.book_id, a.author_name, DATE_FORMAT(b.published_date, '%Y-%m-%d')
FROM author a, book b
WHERE a.author_id = b.author_id
    AND b.category = '경제'
ORDER BY b.published_date