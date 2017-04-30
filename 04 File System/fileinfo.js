// Following is the syntax of the method to get the information about a file 
// fs.stat(path, callback)

var fs = require("fs");

console.log("Going to get file info!");

// fs.Stats class which can be used to check file type
fs.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
}); 
