\connect fullstack_employees

DROP TABLE IF EXISTS employees;
CREATE TABLE employees(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    birthday DATE,
    salary INTEGER
);




