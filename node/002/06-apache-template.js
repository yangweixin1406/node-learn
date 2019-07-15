let http = require('http');
let fs = require('fs');
let template = require('art-template');

let server = http.createServer();

let wwwDir = 'D:/working/www';

server.on('request', function(req, res) {
    // res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // res.end('你好');
    let url = req.url;
    // let filePath = '/index.html';

    fs.readFile('./template-apache.html', function(err, data) {

        if (err) {
            return res.end('404 Not Found');
        }

        fs.readdir(wwwDir, function(err, files) {
            console.log(files);

            if (err) {
                return res.end('Can not find www..');
            }
            var ret = template.render(data.toString(), {
                files: files,
                title: '解读D:/working/www目录'
            })

            res.end(ret);
        })
    })
});

server.listen(3000, function() {
    console.log('Running.....');
});