// 阻塞代码
// 在文件读取完后执行完程序
// 阻塞是按顺序执行的
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");