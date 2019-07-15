var url = require('url');

var Obj = url.parse('https://www.baidu.com/s?wd=%E4%BB%80%E4%B9%88%E6%98%AF&rsv_spt=1&rsv_iqid=0xdf91506a000825a1&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&tn=baiduhome_pg&rsv_enter=1&rsv_sug3=3&rsv_sug2=0&inputT=4616&rsv_sug4=5048', true);

console.log(Obj);