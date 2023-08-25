SELECT hour, count(*)
FROM (
    SELECT HOUR(datetime) AS 'hour'
    FROM animal_outs
) o
WHERE hour BETWEEN 09 AND 20
GROUP BY hour
ORDER BY hour