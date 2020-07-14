const todos = ['Pray', 'Read the Bible', 'Have lunch', 'Work out', 'Code']

todos.splice(2, 1)
todos.push('Read book')
todos.shift()

console.log(`You have ${todos.length} todos!`)
// console.log(todos)

todos.forEach(function (todo, i) {
  console.log(`${i + 1}. ${todo}`)
})

// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i + 1}. ${todos[i]}`)
// }