//引入http模块
var http = require('http');

//创建server服务
var server = http.createServer();

//接收服务器请求
//   request请求事件接收两个参数，一个是request，一个是response
//     request用来接收客户端发送过来的请求
//     response 用来相应客户端的请求，给客户端发送数据
server.on('request', function(request, response) {
    console.log('接收到服务器请求！请求的路径是' + request.url);
    // console.log(request);

    //response对象有一个方法，可以给客户端发送响应数据；
    //write 可以使用多次，但是必须以end结束，否则客户端会一直等待；
    response.write('Hello');
    response.write('World!')

    //告诉客户端返回内容结束，可以显示给用户观看了
    response.end();
})

//服务器设置端口
server.listen(3000, function() {
    console.log('server 已经启动了，可以通过服务器访问');
})