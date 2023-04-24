const fs = require("fs");

// const book = {
//     title : 'Atomic Habits',
//     author : 'James clear'
// };
// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON)


// Now we are going to read the content of "1-json.json" file in this file--->

const dataBuffer = fs.readFileSync("1-json.json");

// And it return a Buffer, which is a way for Node.js to represent Binary data
console.log(dataBuffer);

// Now if we actually want to get our string back , there is a toString method 
const dataJson = dataBuffer.toString();
console.log(dataJson);

// parse the JSON data into a object
const data = JSON.parse(dataJson)

console.log(data.title);
console.log(data.author);