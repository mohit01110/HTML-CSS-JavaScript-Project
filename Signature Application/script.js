const colorPicker = document.getElementById('colorPicker')
const canvasColor = document.getElementById('canvasColor')
const fontPicker = document.getElementById('fontPicker')
const canvas = document.getElementById('myCanvas')
const clearButton = document.getElementById('clearButton')
const saveButton = document.getElementById('saveButton')
const retrieveButton = document.getElementById('retrieveButton')
const ctx = canvas.getContext('2d')

colorPicker.addEventListener('change', (e) => {
  ctx.strokeStyle = e.target.value
  ctx.fillStyle = e.target.value
})

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  lastX = e.offsetX
  lastY = e.offsetY
})

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    lastX = e.offsetX
    lastY = e.offsetY
  }
})

canvas.addEventListener('mouseup', (e) => {
  isDrawing = false
})

canvasColor.addEventListener('change', (e) => {
  ctx.fillStyle = e.target.value
  ctx.fillRect(0, 0, canvas.width, canvas.height)
})

fontPicker.addEventListener('change', (e) => {
  ctx.lineWidth = parseInt(e.target.value)
})

clearButton.addEventListener('click', (e) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
})

saveButton.addEventListener('click', (e) => {
  localStorage.setItem('canvasContent', canvas.toDataURL())

  let link = document.createElement('a')
  link.download = 'signature.png'
  link.href = canvas.toDataURL()
  link.click()
})

retrieveButton.addEventListener('click', (e) => {
  let savedCanvas = localStorage.getItem('canvasContent')
  if (savedCanvas) {
    let img = new Image()
    img.src = savedCanvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
  }
})
