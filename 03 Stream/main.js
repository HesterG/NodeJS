// Each type of Stream is an EventEmitter instance and throws several events 
// at different instance of times
var fs = require("fs");
// data - This event is fired when there is data is available to read.
var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('input.txt');

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

// end - This event is fired when there is no more data to read.
readerStream.on('end',function(){
   console.log(data);
});

// error - This event is fired when there is any error receiving or writing data.
readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");
