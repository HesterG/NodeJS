var http = require("http");
// 向 createServer 函数传递一个匿名函数。
http.createServer(
    function(request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
}).listen(8888);

