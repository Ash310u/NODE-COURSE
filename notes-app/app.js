// const fs = require("fs");

// fs.writeFileSync("note.txt", "This is a note.txt file.");

// fs.appendFileSync("note.txt", `, I'm gonna append this line`);


// it is nt neccessary to use the variale  Name "name" what is used in utils.js file , i can use different names in in different files...these files are completely independent.

// export a variale--->

// const name1 = require("./utils.js");

// console.log(name1);

// export a function--->

const newAdd = require("./utils.js");

const sum = newAdd(2,2)

console.log(sum);
