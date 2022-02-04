INSERT INTO
  departments (name)
VALUES
  ('Sales'),
  ('Finance'),
  ('Engineering'),
  ('Leagal');
INSERT INTO
  roles (title, salary, department_id)
VALUES
  ('Sales Lead', 100000, 1),
  ('Account Manager', 150000, 2),
  ('Lead Engineer', 145000, 3),
  ('Lead Criminal', 500000, 4),
  ('Minor Thief', 50000, 4),
  ('Software Engineer', 110000, 3),
  ('Accountant', 115000, 2),
  ('Salesperson', 80000, 1);
INSERT INTO
  employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Turkey', 'Wild', 1, NULL),
  ('Spokesperson', 'Pinky', 2, NULL),
  ('Grus', 'Mythic', 3, NULL),
  ('Lazy-assed', 'Mastermind', 4, NULL),
  ('Gentleman', 'Mercinary', 6, 3),
  ('Shriekin', 'Professional', 5, 4),
  ('Tha', 'Destroyah', 7, 2),
  ('Annoyin', 'Dominator', 8, 1);







  