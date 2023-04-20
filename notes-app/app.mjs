import chalk from 'chalk';
import validator from 'validator';
import { getNotes, getNotes2 } from './notes.js';

let msg = getNotes();
let msg2 = getNotes2();
console.log(msg);
console.log(msg2);

console. log (validator. isURL("google.com")) ;

let greenMsg = chalk.green.bold.italic.inverse('Success!');
console.log(greenMsg);

// there is a property and that's where we can access all the command line arguments passed in to our app .
console.log(process.argv[2]);