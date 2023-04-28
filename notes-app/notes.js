const fs = require('fs');

let getNotes = () => 'your notes...';

const addNote =(title,body) => {
     const notes = loadNotes();
     
     const duplicateNotes = notes.filter( note => note.title === title);

     if (duplicateNotes.length === 0) {
          notes.push({
               title,
               body
          });
          saveNotes(notes);
          console.log('New Note Added!');
     }else{
          console.log('Note Title Taken!');
     };
};

const removeNote = title => {
     const notes = loadNotes();
     
     const notesToKeep = notes.filter( note => note.title !== title);
     
     if (notes.length > notesToKeep.length) {
          console.log('Note removed!');
          saveNotes(notesToKeep);
     }else{
          console.log(`No note found!`);
     }

};

const listNotes = () => {
     const notes =  loadNotes()

     console.log(`Your notes:`);
     return notes.forEach(note => console.log(note.title));
}

const saveNotes = notes => {
     const dataJSON = JSON.stringify(notes);
     fs.writeFileSync('notes.json', dataJSON);
     
};

const loadNotes = ()=> {
     try {
          const dataBuffer = fs.readFileSync('notes.json');
          const dataJSON = dataBuffer.toString();
          return JSON.parse(dataJSON);
     } catch (e) {
          return [];
     };
}


module.exports = {
     getNotes,
     addNote,
     removeNote,
     listNotes
};