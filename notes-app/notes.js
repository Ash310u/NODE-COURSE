const fs = require('fs');

const addNote =(title,body) => {
     const notes = loadNotes();
     
     const duplicateNote = notes.find( note => note.title === title);

     if (!duplicateNote) {
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

const readNote = title => {
     const notes = loadNotes()

     const note = notes.find( note => note.title === title);

     if (note) {
          console.log(`Title : ${note.title}`);
     console.log(`Body : ${note.body}`);
     }else{
          console.log(`Unable to find note`);
     }
     

}

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
     addNote,
     removeNote,
     listNotes,
     readNote
};