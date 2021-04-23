UPDATE reviews
SET review = $2
WHERE id = $1
returning *;