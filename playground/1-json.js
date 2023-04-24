const book = {
    title : 'Atomic Habits',
    author : 'James clear'
};
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

// opposite of JSON.stringify , which takes in the JSON string and gives us back the object.
const parse =  JSON.parse(bookJSON);
console.log(parse);
console.log(parse.title);
console.log(parse.author);