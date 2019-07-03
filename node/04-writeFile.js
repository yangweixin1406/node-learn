var fs = require('fs');

//第一个参数：文件路径
//第二个参数：要写入的内容
//第三个参数：回调函数
//     回调函数只接收一个参数 error
//     成功：  文件写入成功   error为null
//     失败：  文件写入失败   error是错误对象
fs.writeFile('./data/write.txt', '大家好，我是nodejs，很高兴认识大家', function(error) {
    console.log("文件写入成功!");
})