const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// Serve frontend as static files
app.use(express.static("frontend"));

// Get users from db.json
app.get("/api/users", (req, res) => {
  fs.readFile("database/db.json", "utf8", (err, data) => {
    if (err) return res.status(500).json({ error: "Failed to read database" });
    const db = JSON.parse(data);
    res.json(db.users);
  });
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
