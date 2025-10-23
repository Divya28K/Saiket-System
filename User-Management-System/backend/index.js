

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');

// import your MySQL pool
var pool = require('./models/UserDB.js');

app.set('view engine', 'ejs');

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'cmpe_273_secure_string',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

// Test DB connection
pool.query('SELECT 1 + 1 AS result', (err, rows) => {
    if (err) {
        console.error("DB Connection Error:", err);
    } else {
        console.log("DB Connected:", rows);
    }
});

// =================== Routes ===================

// Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    pool.query('SELECT * FROM admin WHERE username = ?', [username], (err, rows) => {
        if (err || rows.length === 0 || rows[0].password !== password) {
            return res.status(400).send("UnSuccessful Login");
        }
        req.session.user = username;
        res.cookie('cookie', "admin", { maxAge: 900000, httpOnly: false, path: '/' });
        res.send("Successful Login");
    });
});

// Create User
app.post('/create', (req, res) => {
    if (!req.session.user) return res.status(400).send("Session Invalid");
    const { Name, StudentID, Department } = req.body;
    const userData = { name: Name, studentID: StudentID, department: Department };
    pool.query('INSERT INTO user SET ?', userData, (err) => {
        if (err) return res.status(400).send("Unable to insert into database");
        res.send("User Added");
    });
});

// List Users
app.get('/list', (req, res) => {
    pool.query('SELECT * FROM user', (err, result) => {
        if (err) return res.status(400).send("Error in Connection");
        res.send(result);
    });
});

// Delete User
app.delete('/delete/:id', (req, res) => {
    const studentID = req.params.id;
    pool.query('DELETE FROM user WHERE studentID = ?', [studentID], (err) => {
        if (err) return res.status(400).send("User not found");
        pool.query('SELECT * FROM user', (err, result) => {
            if (err) return res.status(400).send("Error in Connection");
            res.send(result);
        });
    });
});

// =================== Start Server ===================
app.listen(5001, () => {
    console.log("Server Listening on port 5001");
});

