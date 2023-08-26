SELECT i.ingredient_type, SUM(f.total_order) as 'tot'
FROM first_half f JOIN icecream_info i
ON f.flavor = i.flavor
GROUP BY i.ingredient_type
ORDER BY tot