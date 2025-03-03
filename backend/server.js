const express = require("express");
const cors = require("cors");

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Working...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Browse to http://localhost:${port}`);
});
