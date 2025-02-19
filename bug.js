const http = require('http');

const server = http.createServer((req, res) => {
  // Keep the connection open indefinitely
  // This will eventually lead to an 'ECONNRESET' error

  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  // Missing res.end() to close the connection
  // This is a common error in Node.js
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});