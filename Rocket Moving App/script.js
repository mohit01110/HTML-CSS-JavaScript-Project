let container = document.querySelector('.container')

document.addEventListener('mousemove', (e) => {
  move(e)
})

const move = (e) => {
  var x = e.pageX
  var y = e.pageY

  container.style.left = x-100 + 'px'
  container.style.top = y-100 + 'px'

}
