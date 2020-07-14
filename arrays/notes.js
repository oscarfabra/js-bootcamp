// const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('My new note')

// console.log(notes.shift())
// notes.unshift('My first note')

// notes.splice(1, 1, 'This is the new second item')

// notes[2] = 'This is now the new note 3'

// notes.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })

// console.log(notes.length)
// console.log(notes)

// for (let count = 2; count >= 0; count--) {
//   console.log(count)
// }

// for (let i = notes.length - 1; i >= 0; i--) {
//   console.log(notes[i])
// }

// console.log(notes.indexOf('note 2'))

const notes = [ {
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habits to work on',
  body: 'Exercise. Eating a bit better.'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

const index = notes.findIndex(function (note, i) {
  return note.title === 'Habits to work on'
})
console.log(index)