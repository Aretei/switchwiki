DROP TABLE IF EXISTS sp_users;

CREATE TABLE sp_users
(
    id SERIAL PRIMARY KEY,
    username VARCHAR(36),
    email VARCHAR(100),
    hash text
);

DROP TABLE IF EXISTS sp_switches;

CREATE TABLE sp_switches\
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(120),
    pic text,
    weight VARCHAR(60),
    sound_profile VARCHAR,
    rating int,
    -- review VARCHAR,
    type VARCHAR(10)
);

CREATE TABLE reviews
(
    id SERIAL PRIMARY KEY,
    sp_switches_id int references sp_switches(id),
    review VARCHAR(2500)
);

INSERT INTO sp_switches
(name, pic, weight, sound_profile, type)
VALUES
('Gateron black ink', 'na', '60g - 70g', 'deeper sound', 'linear'),
('Drop panda', 'na', '67g', 'clack', 'tactile');
