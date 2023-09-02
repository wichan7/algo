SELECT member_id, member_name, gender, DATE_FORMAT(date_of_birth, '%Y-%m-%d') AS 'date_of_birth'
FROM member_profile
WHERE gender = "W"
  AND tlno IS NOT NULL
  AND MONTH(date_of_birth) = 3
ORDER BY member_id