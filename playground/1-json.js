const fs = require("fs")

const book = {
    title : 'Atomic Habits',
    author : 'James clear'
};
const bookJSON = JSON.stringify(book);

fs.writeFileSync("1-json.json", bookJSON)