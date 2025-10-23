
CREATE TABLE IF NOT EXISTS admin (
    username VARCHAR(6) NOT NULL PRIMARY KEY,
    password VARCHAR(6) DEFAULT NULL
);
INSERT INTO admin (username, password) VALUES ('vasu','admin');
SELECT * FROM admin;

CREATE TABLE IF NOT EXISTS user (
    studentID INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    department VARCHAR(45) NOT NULL
);
INSERT INTO user (studentID, name, department) VALUES (90, 'Student', 'Comp Sci');
SELECT * FROM user;
