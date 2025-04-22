const productList = document.getElementById('productList')
const searchInput = document.getElementById('searchInput')
const searchBtn = document.getElementById('searchBtn')
const categoryBtns = document.querySelectorAll('.categoryBtn')

// Initialize with default filtering
filterProduct()

// Event listeners
searchBtn.addEventListener('click', filterProduct)
searchInput.addEventListener('keyup', filterProduct)
categoryBtns.forEach((btn) => {
  btn.addEventListener('click', setCategory)
})

function filterProduct() {
  const searchValue = searchInput.value.toLowerCase()
  const productItems = document.querySelectorAll('.productItem')
  const activeCategory =
    document.querySelector('.categoryBtn.active')?.dataset.category || 'all'

  productItems.forEach((item) => {
    const title = item.querySelector('h3')?.innerText.toLowerCase() || ''
    const category = item.dataset.category || ''

    const matchesSearch = title.includes(searchValue) || searchValue === ''
    const matchesCategory =
      category === activeCategory || activeCategory === 'all'

    item.style.display = matchesSearch && matchesCategory ? 'block' : 'none'
  })
}

function setCategory(e) {
  categoryBtns.forEach((btn) => btn.classList.remove('active'))
  e.target.classList.add('active')
  filterProduct()
}
