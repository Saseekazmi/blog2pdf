const express = require("express");
// const bodyParser = require("body-parser");
const { default: axios } = require("axios");
const app = express();
const port = process.env.PORT || 3333;


// // middleware
//cors 
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());
app.use(express.urlencoded());


app.post("/generate-pdf", async (req, res) => {
  const { url, email } = req.body;
  const apiUrl = `https://txtpaper.com/api/v1/?url=${url}&format=pdf&email=${email}`;
  const { data } = await axios.get(apiUrl);
  res.send(data);
});

app.listen(port, () => {
  console.log(`App running in http://localhost:${port}`);
});
