// Read existing notes from localStorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem('notes')
  if (notesJSON !== null) {
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// Save the notes to localStorage
const saveNotes = function (notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Remove a note from the list
const removeNote = function (noteId) {
  const i = notes.findIndex(function (note) {
    return note.id === noteId
  })
  if (i > -1) notes.splice(i, 1)
}

// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement('div')
  const textEl = document.createElement('span')
  const button = document.createElement('button')
  
  // Setup the remove note button
  button.textContent = 'x'
  noteEl.appendChild(button)
  button.addEventListener('click', function () {
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  // Setup the note title text
  textEl.textContent = (note.title.length > 0) ? note.title : 'Unnamed note'
  noteEl.appendChild(textEl)

  return noteEl
}

// Render application notes
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter( function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = ''
  
  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note)
    document.querySelector('#notes').appendChild(noteEl)
  })
}