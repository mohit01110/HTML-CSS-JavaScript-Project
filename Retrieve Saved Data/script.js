function saveToLocalStorage() {
  const textInput = document.getElementById('textInput')
  const text = textInput.value
  localStorage.setItem('text', text)
  textInput.value = ''
}

function loadFromLocalStorage() {
  const text = localStorage.getItem('text')

  if (text) {
    const output = document.getElementById('output')
    output.textContent = text
  } else {
    const output = document.getElementById('output')
    output.textContent = 'No text saved.'
  }
}

loadFromLocalStorage()

