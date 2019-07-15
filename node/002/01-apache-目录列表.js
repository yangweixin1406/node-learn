let http = require('http');
let fs = require('fs');

let server = http.createServer();

let wwwDir = 'D:/working/www';

server.on('request', function(req, res) {
    // res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    // res.end('你好');
    let url = req.url;
    // let filePath = '/index.html';

    fs.readFile('./template.html', function(err, data) {

        if (err) {
            return res.end('404 Not Found');
        }

        fs.readdir(wwwDir, function(err, files) {
            console.log(files);

            if (err) {
                return res.end('Can not find www..');
            }

            let content = '';

            files.forEach(function(item) {
                content += `   
                  <tr>
                    <td data-value="apple/"><a class="icon dir" href="/D:/working/www/${item}/">${item}/</a></td>
                    <td class="detailsColumn" data-value="0"></td>
                    <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
                  </tr>`
            })

            data = data.toString();

            data = data.replace('^_^', content);

            res.end(data);
        })
    })
});

server.listen(3000, function() {
    console.log('Running.....');
});