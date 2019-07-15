 //在node中使用art-template.

 let fs = require('fs');
 let template = require('art-template');

 fs.readFile('./05-tpl使用.html', function(err, data) {
     if (err) {
         return console.log('出现错误，无法查找！');
     }
     var ret = template.render(data.toString(), {
         name: 'Jack',
         age: 15,
         address: '黄土高坡',
         hobbies: ['吸烟', '喝酒', '烫头']
     })

     console.log(ret);

 })