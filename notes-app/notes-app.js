const notes = [{
  title: 'My next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habits to work on',
  body: 'Exercise. Eating a bit better.'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

document.querySelector('#create-note').addEventListener('click', function (e) {
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})
// console.log('This is from a different file.')

// Query and remove
// const p = document.querySelector('p')
// p.remove()

// Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//   p.textContent = '*******'
//   // console.log(p.textContent)
//   // p.remove()
// })

// const newP = document.createElement('p')
// newP.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newP)