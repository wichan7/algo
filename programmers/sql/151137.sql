SELECT car_type, count(*) as 'cars'
FROM car_rental_company_car
WHERE options LIKE '%시트%'
GROUP BY car_type
ORDER BY car_type