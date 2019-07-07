//引入http模块
var http = require('http');

//创建server服务
var server = http.createServer();

//接收服务器请求
server.on('request', function() {
    console.log('接收到服务器请求！');
})

//服务器设置端口
server.listen(3000, function() {
    console.log('server 已经启动了，可以通过服务器访问');
})