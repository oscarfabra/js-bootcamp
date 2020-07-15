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

// todos.splice(2, 1)
// todos.push('Read book')
// todos.shift()

// console.log(`You have ${todos.length} todos!`)
// // console.log(todos)

// todos.forEach(function (todo, i) {
//   console.log(`${i + 1}. ${todo}`)
// })

// for (let i = 0; i < todos.length; i++) {
//   console.log(`${i + 1}. ${todos[i]}`)
// }

const deleteTodo = function (todos, text) {
  const i = todos.findIndex (function (todo) {
    return todo.text.toLowerCase() === text.toLowerCase()
  })
  if (i !== -1) todos.splice(i, 1)
}

const getThingsToDo = function (todos) {
  return todos.filter(function (todo) {
    return !todo.completed
  })
}

const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (a.completed < b.completed) {
      return -1
    } else if (b.completed < a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

sortTodos(todos)
console.log(todos)

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'code!!')
// console.log(todos)