// 非阻塞代码
// 不需要等待文件读取完就可以在读取文件时同时执行接下来的代码，大大提高了程序的性能。
// 非阻塞是不需要按顺序的
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");