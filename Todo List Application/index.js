const todoInput = document.getElementById('todoInput')
const addTodoBtn = document.querySelector('.addTodoBtn')
const todolist = document.getElementById('todolist')

addTodoBtn.addEventListener('click', addTodo)

todoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTodo()
  }
})

function addTodo() {
  const todoText = todoInput.value.trim()
  if (todoText !== '') {
    const li = document.createElement('li')
    const deleteButton = document.createElement('button')
    const updateButton = document.createElement('button')
    li.textContent = todoText
    deleteButton.textContent = 'Delete'
    updateButton.textContent = 'Update'
    todolist.appendChild(li)
    li.appendChild(deleteButton)
    li.appendChild(updateButton)
    deleteButton.onclick = function () {
      todolist.removeChild(li)
      deleteButton.parentNode.removeChild(deleteButton)
    }
    updateButton.onclick = function () {
      todoInput.value = todoText
      todolist.removeChild(li)
      deleteButton.parentNode.removeChild(deleteButton)
    }
    todoInput.value = ''
  }
}
