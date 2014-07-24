var http = require('http');
var PORT = Number(process.env.PORT || 8000);

http.createServer(function (req, res) {
  console.log('%d request received', process.pid);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello world!\n');
}).listen(PORT);

console.log('%d listening on %d', process.pid, PORT);
