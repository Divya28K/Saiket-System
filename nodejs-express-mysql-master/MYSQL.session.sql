CREATE TABLE usersdb (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  age INT
);

INSERT INTO usersdb (name, email, age)
VALUES 
('Divya', 'divya@example.com', 22),
('Aravind', 'aravind@example.com', 25),
('Gouthami', 'gouthami@example.com', 24);

SELECT * FROM usersdb;