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

const filters = {
  searchText: ''
}

// Renders Todos according to the given filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#todo-list').innerHTML = ''

  let todosLeft = 0
  filteredTodos.forEach(function (todo){
    if (!todo.completed) todosLeft++
  })

  const summary = document.createElement('h2')
  let todoText = (todosLeft === 1) ? 'todo' : 'todos'
  summary.textContent = `You have ${todosLeft} ${todoText} left`
  document.querySelector('#todo-list').appendChild(summary)

  filteredTodos.forEach(function (todo) {
    let p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todo-list').appendChild(p)
  })
}

// Calls renderTodos to populate the #todo-list when page opens
renderTodos(todos, filters)

// Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function () {
  console.log("I'm adding a new Todo")
})

// Listen for todo text change
document.querySelector('#new-todo').addEventListener('input', function (e) {
  console.log(e.target.value)
})

// Listen for search text change
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})