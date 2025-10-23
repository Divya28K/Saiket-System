// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.json([
    { name: "Divya", age: 22 },
    { name: "Aravind", age: 23 }
  ]);
});

app.listen(5001, () => console.log("Backend running on port 5001"));
