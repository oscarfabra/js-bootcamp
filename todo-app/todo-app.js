const todos = [{
  text: 'Pray',
  completed: true
}, {
  text: 'Read the Bible',
  completed: true
}, {
  text: 'Have lunch',
  completed: true
}, {
  text: 'Work out',
  completed: false
}, {
  text: 'Code',
  completed: false
}]

// const ps = document.querySelectorAll('p')
// ps.forEach(function (p) {
//   if (p.textContent.toLowerCase().includes('the')) {
//     p.remove()
//   }
// })
let todosLeft = 0
todos.forEach(function (todo){
  if (!todo.completed) todosLeft ++
})

const summary = document.createElement('h2')
summary.textContent = `You have ${todosLeft} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
  let newP = document.createElement('p')
  newP.textContent = todo.text
  document.querySelector('body').appendChild(newP)
})

document.querySelector('#add-todo').addEventListener('click', function () {
  console.log("I'm adding a new Todo")
})