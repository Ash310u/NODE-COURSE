// import validator from 'validator';
// import chalk from 'chalk';
const notes = require('./notes.js')
const yargs = require('yargs');

// Customize yargs version
yargs.version('1.1.1');

// Create add command
yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title: {
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body: {
            describe:`it's body`,
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
// Create remove command
yargs.command({
    command: 'remove',
    describe:'Remove a note',
    builder:{
        title: {
            describe:'note title',
            demandOption:true,
            type:'string'
        } 
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})
// Create list command
yargs.command({
    command: 'list',
    describe:'List your notes',
    handler(){
        notes.listNotes();
    }
})
// Create read command
yargs.command({
    command: 'read',
    describe:'Read a note',
    handler(){
        console.log('Reading a note!');
    }
})

yargs.parse();

