const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World! This is my Node.js app! How was your day");
});

app.get("/health", (req, res) => {
  res.send("<h1>Everything is ok what about you is everything fine</h1>");
});

app.get("/greet/:name", (req, res) => {
  res.send(`<h1>Welcome ${req.params.name}</h2>`);
});


if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

module.exports = app; 
