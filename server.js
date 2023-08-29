const http = require("http");
// username
// password
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/contact") {
    res.write("you are in the contact page!");
    res.end();
  } else {
    res.statusCode = 404;
    res.write("page not found");
    res.end();
  }
});
server.listen(3000);
