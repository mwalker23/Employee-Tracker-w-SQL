INSERT INTO departments (department_name)
VALUES ("HR"),
       ("FINANCE"),
       ("TECHNOLOGY"),
       ("CUSTOMER SERVICE"),
       ("MARKETING");


INSERT INTO role (title, department_id, salary)
VALUES ("Director", 1, 10000),
       ("Account Manager", 2, 160000),
       ("Accountant", 2, 125000),
       ("Brand Management", 4, 65000),
       ("Social Media Marketing", 4, 55000),
       ("Custom Service Associate", 5, 45000),
       ("IT Helpdesk", 3, 45000);
       
INSERT INTO employee (last_name, first_name, role_id, manager_id)
VALUES ("Walker", "Madison", 1,1),
       ("Doe", "John",3,2),
       ("Chan","Jackie",4,3),
       ("Sky", "Blue",2,null),
       ("Grass", "Green",4,5),
       ("Banana", "Yellow",4,null);


       