//在node中，每个模块都有自己的 module对象
//在这个module对象中有一个exports成员
//如果你需要对外导出对象，只需要把到处的成员挂载到module.exports 中

// module = {
//     exports: {

//     }
// }

//谁来require我，谁就得到 moudle.exports
//我们可以认为在最后会有一个
// return module.exports;

module.exports.foo = 'foo';
module.exports.add = function(x, y) {
    return x + y;
}