const express = require("express");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");

const app = express();
const port = process.env.PORT || 3333;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/generate-pdf", async (req, res) => {
  const { url, email } = req.body;
  const apiUrl = `https://txtpaper.com/api/v1/?url=${url}&format=pdf&email=${email}`;
  const { data } = await axios.get(apiUrl);
  res.send(data);
});

app.listen(port, () => {
  console.log(`App running in listening at http://localhost:${port}`);
});
