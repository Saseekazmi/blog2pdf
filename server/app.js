const express = require("express");
// const bodyParser = require("body-parser");
const { default: axios } = require("axios");

const app = express();
const port = process.env.PORT || 3333;

// middleware
app.use(express.json());
app.use(express.urlencoded());

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());


app.post("/generate-pdf", async (req, res) => {
  console.log(req.body);
  // const { url, email } = req.body;
  // const apiUrl = `https://txtpaper.com/api/v1/?url=${url}&format=pdf&email=${email}`;
  // const { data } = await axios.get(apiUrl);
  // res.send(data);
});

app.listen(port, () => {
  console.log(`App running in http://localhost:${port}`);
});
