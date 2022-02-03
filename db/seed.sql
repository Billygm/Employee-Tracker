INSERT INTO
  department (id, name)
VALUES
  (1, 'Sales'),
  (2, 'Finance'),
  (3, 'Engineering'),
  (4, 'Leagal');
INSERT INTO
  roles (id, title, salary, department_id)
VALUES
  (1, 'Sales Lead', 100000, 1),
  (2, 'Account Manager', 150000, 2),
  (3, 'Lead Engineer', 145000, 3),
  (4, 'Lead Criminal', 500000, 4),
  (5, 'Minor Thief', 50000, 4),
  (6, 'Software Engineer', 110000, 3),
  (7, 'Accountant', 115000, 2),
  (8, 'Salesperson', 80000, 1);
INSERT INTO
  employees (id, first_name, last_name, role_id, manager_id)
VALUES
  (1, 'Turkey', 'Wild', 1),
  (2, 'Spokesperson', 'Pinky', 3),
  (3, 'Grus', 'Mythic', 4),
  (4, 'Genus', 'Mustela', 2),
  (5, 'Gentleman', 'Mercinary', 6, 3),
  (6, 'Lazy-assed', 'Mastermind', 5, 4),
  (7, 'Tha', 'Destroyah', 7, 2),
  (8, 'Annoyin', 'Dominator', 8, 1);