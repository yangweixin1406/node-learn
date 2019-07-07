var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
    console.log('我接收到东西了');
    switch (request.url) {
        case '/index':
            response.end('这是首页');
            break;
        case '/login':
            response.end('这是登录');
            break;
        case '/register':
            response.end('这是注册');
            break;
        default:
            response.end('默认的东西');
    }
})

server.listen(3000, function() {

})