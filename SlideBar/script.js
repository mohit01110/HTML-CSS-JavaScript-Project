const threeDots = document.querySelector('.three-dots')
const cut = document.querySelector('.cut')
const container = document.querySelector('.container')

threeDots.addEventListener('click', () => {
  container.style.width = '50vw'
})

cut.addEventListener('click', () => {
  container.style.width = '0'
})
