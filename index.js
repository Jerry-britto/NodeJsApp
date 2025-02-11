const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res
    .status(200)
    .send("Hello, World! This is my Node.js app! How was your day");
});

app.get("/greet/:name", (req, res) => {
  res.status(200).json({ message: `Greetings ${req.params.name} How are you` });
});

app.get("/health", (_, res) => {
  res
    .status(200)
    .send("<h1>Everything is ok what about you is everything fine</h1>");
});

app.get("/products", (_, res) => {
  res.status(200).send([
    {
      productId: "101",
      price: 100,
    },
    {
      productId: "102",
      price: 150,
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
