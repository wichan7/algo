SELECT animal_id, name
FROM (
    SELECT i.animal_id, i.name, DATEDIFF(o.datetime, i.datetime) as diff
    FROM animal_ins i JOIN animal_outs o
    ON i.animal_id = o.animal_id
    ORDER BY diff desc
    LIMIT 2
) t