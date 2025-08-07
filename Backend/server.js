const express = require("express");

const app = express();
const PORT = process.env.PORT || 7000;

app.listen(
  PORT,
  console.log(`Server running on port http://localhost:${PORT}`)
);
