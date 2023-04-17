const fs = require("fs");

fs.writeFileSync("note.txt", "This is a note.txt file.");

fs.appendFileSync("note.txt", `, I'm gonna append this line`);


// it is nt neccessary to use the variale  Name "name" what is used in utils.js file , i can use different names in in different files...
const name1 = require("./utils.js");

console.log(name1);

console.log("app.js");
