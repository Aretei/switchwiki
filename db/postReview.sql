INSERT INTO reviews
(sp_switches_id, review)
VALUES
($1, $2)
returning *;