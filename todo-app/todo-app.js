const todos = getSavedTodos()

const filters = {
  searchText: '',
  hideCompleted: false
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
  saveTodos(todos)
  renderTodos(todos, filters)
  e.target.elements.todoText.value = ''
})

// Listen for changes to the hide-completed checkbox
document.querySelector('#hide-completed').addEventListener('change', function (e) {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})