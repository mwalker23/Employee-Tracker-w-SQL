DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db;

USE departments_db;

CREATE TABLE departments (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
department_name VARCHAR(30) --  to hold department name
);


CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30), -- to hold role title
salary DECIMAL, -- to hold role salary
department_id INT, 
FOREIGN KEY (department_id)
REFERENCES departments(id)
ON DELETE SET NULL
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30), -- to hold employee first name
last_name VARCHAR(30), -- to hold employee last name
role_id INT, 
FOREIGN KEY (role_id)
REFERENCES role(id)
ON DELETE SET NULL,
manager_id INT, 
FOREIGN KEY (manager_id)
REFERENCES employee (id)
ON DELETE SET NULL
);