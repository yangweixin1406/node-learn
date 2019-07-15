let http = require('http');
let fs = require('fs');
let template = require('art-template');
let url = require('url');

let comments = [{
        name: '李四',
        message: '今天天气不错，我想出去旅游。',
        addTime: new Date()
    },
    {
        name: '李四1',
        message: '今天天气不错，我想出去旅游。',
        addTime: new Date()
    },
    {
        name: '李四2',
        message: '今天天气不错，我想出去旅游。',
        addTime: new Date()
    },
    {
        name: '李四3',
        message: '今天天气不错，我想出去旅游。',
        addTime: new Date()
    },
    {
        name: '李四4',
        message: '今天天气不错，我想出去旅游。',
        addTime: new Date()
    }
];

let server = http.createServer();
server.on('request', function(req, res) {
    let parseObj = url.parse(req.url, true);
    let pathname = parseObj.pathname;
    if (pathname === '/') {
        fs.readFile('./views/index.html', function(err, data) {
            if (err) {
                return res.end('404 Not Found...');
            }

            let ret = template.render(data.toString(), {
                comments: comments
            })

            res.end(ret);
        })
    } else if (pathname.indexOf('/public/') === 0) {
        //如果请求路径是以 /public/ 开头的，则读取直接显示文件内容
        fs.readFile('.' + pathname, function(err, data) {
            if (err) {
                return res.end('404 Not Found...');
            }
            res.end(data);
        })
    } else if (pathname === '/post') {
        //如果请求路径是以 /public/ 开头的，则读取直接显示文件内
        fs.readFile('./views/post.html', function(err, data) {
            if (err) {
                return res.end('404 Not Found...');
            }
            res.end(data);
        })
    } else if (pathname === '/pinglun') {
        let comment = parseObj.query;
        comment.addTime = new Date();
        comments.push(comment);

        //如何通过服务器让客户端重定向
        //    1.状态码设置为 302 为临时重定向。   301为永久重定向
        //    2.在响应头中通过 location 告诉客户端往哪里重定向
        //如果客户端发现收到的服务端相应代码为302，就会自动的去响应头中找    location，然后对重定向地址发送新的请求
        //所以就能够看到客户端自动跳转了

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    } else {
        fs.readFile('./views/404.html', function(err, data) {
            res.end(data);
        })
    }
})
server.listen(3000, function() {
    console.log('Running...');
})