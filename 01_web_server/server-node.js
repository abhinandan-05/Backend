const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello tea");
  } else if (req.url === '') {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("tea");
  } else
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
