var fs = require('fs');

fs.readFile('./data/read.txt', function(error, data) {
    //console.log(data.toString());、
    if (error) {
        console.log('出现错误');
    } else {
        console.log(data.toString());
    }
});