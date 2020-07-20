// Read existing todos from localStorage
const getSavedTodos = function () {
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON !== null) { 
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

// Save todos to localStorage
const saveTodos = function (todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove a todo from the list
const removeTodo = function (todoId) {
  const i = todos.findIndex(function (todo) {
    return todo.id === todoId
  })
  if (i > -1) todos.splice(i, 1)
}

// Generate a DOM element for a given todo
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement('div')
  const checkbox = document.createElement('input')
  const todoText = document.createElement('span')
  const removeButton = document.createElement('button')

  // Setup the checkbox
  checkbox.setAttribute('type', 'checkbox')
  todoEl.appendChild(checkbox)

  // Setup the todo text
  todoText.textContent = todo.text
  todoEl.appendChild(todoText)

  // Setup the remove button
  removeButton.textContent = 'x'
  todoEl.appendChild(removeButton)
  removeButton.addEventListener('click', function () {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return todoEl
}

// Generate the DOM element for the list summary
const generateSummaryDOM = function (todosLeft) {
  const summary = document.createElement('h2')
  const todoText = (todosLeft === 1) ? 'todo' : 'todos'
  summary.textContent = `You have ${todosLeft} ${todoText} left`
  return summary
}

// Renders application todos based on given filters
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

  document.querySelector('#todo-list').appendChild(generateSummaryDOM(todosLeft))

  filteredTodos.forEach(function (todo) {
    document.querySelector('#todo-list').appendChild(generateTodoDOM(todo))
  })
}