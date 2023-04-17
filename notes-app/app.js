const validator = require('validator')

// exporting function--->

const getNotes = require('./notes.js');

let msg= getNotes();

console.log(msg);
 

console.log(validator.isURL("google.com"));