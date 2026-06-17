const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Online Book Store Backend Running!");
});

const books = [
  { id: 1, name: "Harry Potter", price: 499 },
  { id: 2, name: "Rich Dad Poor Dad", price: 350 },
  { id: 3, name: "Atomic Habits", price: 450 }
];
app.get("/books", (req, res) => {
    res.json(books);
});
app.listen(5000, () => {
    console.log("Server running on port 5000");
});