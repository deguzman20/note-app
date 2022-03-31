const yargs = require('yargs');
const { 
  getNotes, 
  addNote, 
  removeNote,
  listNotes,
  readNote
} = require('./notes.js')

yargs.version('12.0.16');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function(argv) {
    addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function(argv) {
    removeNote(argv.title)
  }
});

yargs.command({
  command: 'list',
  describe: 'List your note',
  handler: function() {
    console.log(listNotes());
  }
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function(argv) {
    console.log(readNote(argv.title));
  }
});

// const command = process.argv[2]

// console.log(process.argv)
// console.log(yargs.argv)

yargs.parse();