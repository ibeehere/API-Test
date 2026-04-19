const express = require('express');
const app = express();

app.get('/user', (req, res) => {
  res.json({ name: "Ali", age: 25 });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});