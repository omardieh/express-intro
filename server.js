const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Test with nodemon!");
});

app.get("/cat", (req, res) => {
  // res.send(`
  // <!doctype html>
  // <html>
  //   <head>
  //     <meta charset="utf-8">
  //     <title>Cat</title>
  //     <link rel="stylesheet" href="/stylesheets/style.css" />
  //   </head>
  //   <body>
  //     <h1>Cat</h1>
  //     <p>This is my second route</p>
  //     <img src="/images/cool-cat.jpg" />
  //   </body>
  // </html>
  // `);
  console.log(__dirname);
  res.sendFile(__dirname + "/views/cat-page.html");
});

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  }
  console.log(`app is running on port ${port}`);
});
