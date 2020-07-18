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
  searchText: '',
  hideCompleted: false
}

// Renders Todos according to the given filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed
    return searchTextMatch && hideCompletedMatch
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

// Listen for search text change
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

// Listen for the todo form's submit button
document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push({text: e.target.elements.todoText.value, completed: false})
  renderTodos(todos, filters)
  e.target.elements.todoText.value = ''
})

// Listen for changes to the hide-completed checkbox
document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})