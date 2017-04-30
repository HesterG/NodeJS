// Following is the syntax of the method to open a file in asynchronous mode
// fs.open(path, flags[, mode], callback)
// path - This is the string having file name including path.
// flags - Flags indicate the behavior of the file to be opened. All possible 
//         values have been mentioned below.
// mode - It sets the file mode (permission and sticky bits), but only if the 
//        file was created. It defaults to 0666, readable and writeable.
// callback - This is the callback function which gets two arguments (err, fd).
var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!");     
});
