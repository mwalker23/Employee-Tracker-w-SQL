INSERT INTO departments (department_name)
VALUES ("HR"),
       ("FINANCE"),
       ("TECHNOLOGY"),
       ("CUSTOMER SERVICE"),
       ("MARKETING");


INSERT INTO role (title, department_id, salary)
VALUES ("Director", "HR", 10000),
       ("Account Manager", "Finance", 160000),
       ("Accountant", "Finance", 125000),
       ("Brand Management", "Marketing", 65000),
       ("Social Media Marketing", "Marketing", 55000),
       ("Custom Service Associate", "Customer Service", 45000),
       ("IT Helpdesk", "Technology", 45000);
       
INSERT INTO employee (last_name, first_name, role_id, manager_id)
VALUES ("Walker", "Madison"),
       ("Doe", "John"),
       ("Chan","Jackie"),
       ("Sky", "Blue"),
       ("Grass", "Green"),
       ("Banana", "Yellow");


       