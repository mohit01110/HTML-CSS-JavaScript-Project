let input = document.getElementById('input')
let btn = document.getElementById('btn')
let wrng = document.querySelector('.wrng')
let guesses = document.getElementById('guesses')

let answer = Math.floor(Math.random() * 100) + 1
console.log(answer)
let guessCount = 0

btn.addEventListener('click', () => {
  guessNumber()
})
function guessNumber() {
  let number = Number(input.value)

  if (number === answer) {
    wrng.textContent = 'Correct'
    guessCount++
    guesses.textContent = `No. of Guess : ${guessCount}`
    input.value = ''
    setTimeout(() => {
      resetGame()
    }, 5000)
  } else if (number > answer) {
    guessCount++
    wrng.textContent = 'Too High'
    guesses.textContent = `No. of Guess : ${guessCount}`
    input.value = ''
  } else if (number < answer) {
    guessCount++
    wrng.textContent = 'Too Low'
    guesses.textContent = `No. of Guess : ${guessCount}`
    input.value = ''
  } else {
    wrng.textContent = 'Invalid Input'
    input.value = ''
  }
}

function resetGame() {
  guessCount = 0
  answer = Math.floor(Math.random() * 100) + 1
  wrng.textContent = ''
  input.value = ''
  guesses.textContent = `No. of Guess : ${guessCount}`
}
