let slideIndex = 0
const slides = document.querySelectorAll('.slide')
const totalSlides = slides.length

function showSlide() {
  if(slideIndex < 0) {
    slideIndex = totalSlides - 1
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0
  }

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block'
    } else {
      slide.style.display = 'none'
    }
  })
}

function prevSlide() {
  slideIndex--
  showSlide()
}

function nextSlide() {
  slideIndex++
  showSlide()
}
