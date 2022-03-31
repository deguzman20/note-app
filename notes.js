const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
  return 'Your notes...'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNotes = notes.filter((note) => note.title === title);

  // debugger

  if (duplicateNotes.length === 0) {
      notes.push({
        title,
        body,
      })
      saveNotes(notes)
      console.log(chalk.green.bold('New note added!'));
  } else {
      console.log(chalk.red.bold('Note title taken!'));
  }
}

const removeNote = (title) => {
  const notes = loadNotes();
  const isExisting = notes.some((note) => note.title === title);
  
  const removedSpecificNotes = notes.filter((note) => {
    return note.title !== title;
  });
  
  if(isExisting) {
    saveNotes(removedSpecificNotes);
    console.log('Note deleted!');
  } else {
    console.log('Title does not exist');
  }
}

const listNotes = () => {
  const notes = loadNotes();
  
  return notes;
}

const readNote = (title) => {
  const notes = loadNotes();
  const isExisting = notes.some((note) => note.title === title);

  return isExisting;
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
}