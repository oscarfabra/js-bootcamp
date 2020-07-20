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

// Generate a DOM element for a given todo
const generateTodoDOM = function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  return p
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