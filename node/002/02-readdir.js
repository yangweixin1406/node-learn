let fs = require('fs');

fs.readdir('D:/working/www', function(err, files) {
    console.log(files);
})