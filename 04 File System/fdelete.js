// fs.unlink(path, callback)
// path - This is the file name including path.
// callback - This is the callback function No arguments other than a possible 
//            exception are given to the completion callback.
var fs = require("fs");

console.log("Going to delete an existing file");
fs.unlink('input.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("File deleted successfully!");
});
