const express = require("express");

const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send(`<h1>Aaron Verdine's Recipe Book</h1>`);
});

server.listen(port, () => {
  console.log(`Server initalized at http://localhost:${port}`);
});
