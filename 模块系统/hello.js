// Node.js 提供了exports 和 require 两个对象，
// 其中 exports 是模块公开的接口
// require 用于从外部获取一个模块的接口，即所获取模块的 exports 对象。

// 通过 exports 对象把 world 作为模块的访问接口
// 在 main.js 中通过 require('./hello') 加载这个模块
// 然后就可以直接访问 hello.js 中 exports 对象的成员函数了。
function Hello() { 
	var name; 
	this.setName = function(thyName) { 
		name = thyName; 
	}; 
	this.sayHello = function() { 
		console.log('Hello ' + name); 
	}; 
}; 
module.exports = Hello;

// 模块接口的唯一变化是使用 module.exports = Hello 
// 代替了exports.world = function(){}。 
// 在外部引用该模块时，其接口对象就是要输出的 Hello 对象本身，而不是原先的 exports