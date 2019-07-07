const http = require('http');

const fs = require('fs');

var server = http.createServer();

server.on('request', function(req, res) {
    var url = req.url;
    if (url === "/") {

        fs.readFile('./resource/index.html', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('出现错误，请您稍后重试。。。');
            } else {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.end(data);
            }
        })

    } else if (url === '/daitu') {

        fs.readFile('./resource/daitu.jpg', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                res.end('出现错误，请您稍后重试。。。');
            } else {
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        })

    }
});

server.listen(3000, function() {

})