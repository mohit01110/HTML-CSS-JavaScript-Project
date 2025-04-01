let message1 = document.querySelector('.message1')
let message2 = document.querySelector('.message2')
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')

btn1.addEventListener('click', () => {
  document.addEventListener('keydown', handleDown)
  document.addEventListener('keyup', handleUp)
  btn1.disabled = true
  btn2.disabled = false
})

btn2.addEventListener('click', () => {
  document.removeEventListener('keydown', handleDown)
  document.removeEventListener('keyup', handleUp)
  message1.textContent = ''
  message2.textContent = ''
  btn2.disabled = false
  btn1.disabled = true
})

function handleDown(e) {
  let keyName = e.key
  if (e.key.startsWith('Arrow')) {
    // Fixed typo here
    keyName = e.key.replace('Arrow', '') // Remove 'Arrow' from key name
  }
  message1.textContent = `Key ${keyName} pressed down`
  message2.textContent = 'Key is Down'
}

function handleUp(e) {
  let keyName = e.key
  if (e.key.startsWith('Arrow')) {
    // Fixed typo here
    keyName = e.key.replace('Arrow', '') // Remove 'Arrow' from key name
  }
  message1.textContent = `Key ${keyName} pressed Up`
  message2.textContent = 'Key is UP'
}
