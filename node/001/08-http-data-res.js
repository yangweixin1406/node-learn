var http = require('http');

var server = http.createServer();

server.on('request', function(request, response) {
    console.log('我接收到东西了');
    response.setHeader('Content-type', 'text/plain;charset=utf-8');
    var products = [
        { name: "iphonex", price: 8888 },
        { name: "huawei pro", price: 8555 },
        { name: "xiaomi", price: 6666 },
        { name: "oppo", price: 666 },
        { name: "vivo", price: 8622 }
    ];
    switch (request.url) {
        case '/index':
            response.end(JSON.stringify(products));
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