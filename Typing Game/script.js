const typingText = document.querySelector('.typing-text p')
const inputField = document.querySelector('.wrapper .input-field')
const time = document.querySelector('.time span b')
const mistakes = document.querySelector('.mistake span')
const wpm = document.querySelector('.wpm span')
const cpm = document.querySelector('.cpm span')
const tryAgainBtn = document.querySelector('button')

// Set initial values
let timer
let maxTime = 60
let timeLeft = maxTime
let charIndex = 0
let mistake = 0
let isTyping = false

// Load paragraph
function loadParagraph() {
  const paragraph = [
    'Success is not final, failure is not fatal. It is the courage to continue that counts.',
    'The only way to achieve the impossible is to believe it is possible and take action every single day.',
    'Success is not measured by money or fame but by the impact you make on others’ lives daily.',
    'Dreams don’t work unless you do; put in the effort and watch your goals come to life.',
    'Every morning brings new potential, but it’s up to you to seize the day and make it count.',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    'Your attitude determines your direction; stay positive, work hard, and success will follow your every step.',
    'The best way to predict the future is to create it yourself through hard work and dedication.',
    'Don’t wait for the perfect moment; take the moment and make it perfect through your actions.',
    'Challenges are what make life interesting; overcoming them is what makes life meaningful and worth living.',
    'The only person you are destined to become is the person you decide to be; choose wisely.',
    'Success is a journey, not a destination; enjoy the process and learn from every step you take.',
    'You have within you right now everything you need to achieve anything you’ve ever dreamed of.',
    'The difference between ordinary and extraordinary is that little extra effort you put into everything you do.',
    'Your time is precious; don’t waste it living someone else’s life when you can create your own.',
    'The road to success is always under construction; keep building, keep learning, and never give up.',
    'Happiness is not something you postpone for the future; it’s something you design for the present moment.',
    'The only limits in life are the ones you set for yourself; break free and achieve greatness.',
    'Every accomplishment starts with the decision to try; take that first step and keep moving forward.',
    'Success is not about luck; it’s about hard work, persistence, and learning from every failure.',
    'The best revenge is massive success; prove your doubters wrong by achieving what they thought was impossible.',
  ]

  const randomIndex = Math.floor(Math.random() * paragraph.length)
  typingText.innerHTML = ''
  for (const char of paragraph[randomIndex]) {
    typingText.innerHTML += `<span>${char}</span>`
  }
  typingText.querySelectorAll('span')[0].classList.add('active')
}

// Handle user input
function initTyping() {
  const chars = typingText.querySelectorAll('span')
  const typedChar = inputField.value.split('')[charIndex]

  if (charIndex < chars.length && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTimer, 1000)
      isTyping = true
    }

    if (typedChar == null) {
      // Handle backspace
      if (charIndex > 0) {
        charIndex--
        if (chars[charIndex].classList.contains('incorrect')) {
          mistake--
        }
        chars[charIndex].classList.remove('correct', 'incorrect')
      }
    } else {
      if (chars[charIndex].textContent === typedChar) {
        chars[charIndex].classList.add('correct')
      } else {
        mistake++
        chars[charIndex].classList.add('incorrect')
      }
      charIndex++
    }

    chars.forEach((span) => span.classList.remove('active'))
    if (charIndex < chars.length) {
      chars[charIndex].classList.add('active')
    }

    // Update WPM, CPM, and mistakes
    const timeElapsed = maxTime - timeLeft
    const wpmVal =
      timeElapsed > 0
        ? Math.round(((charIndex - mistake) / 5 / timeElapsed) * 60)
        : 0
    wpm.textContent = wpmVal
    cpm.textContent = charIndex - mistake
    mistakes.textContent = mistake
  } else {
    clearInterval(timer)
    inputField.value = ''
  }
}

// Timer function
function initTimer() {
  if (timeLeft > 0) {
    timeLeft--
    time.textContent = timeLeft
  } else {
    clearInterval(timer)
  }
}

// Reset game function
function resetGame() {
  loadParagraph()
  clearInterval(timer)
  timeLeft = maxTime
  charIndex = 0
  mistake = 0
  isTyping = false
  inputField.value = ''
  time.textContent = timeLeft
  wpm.textContent = 0
  cpm.textContent = 0
  mistakes.textContent = 0
  typingText
    .querySelectorAll('span')
    .forEach((span) => span.classList.remove('correct', 'incorrect'))
  typingText.querySelectorAll('span')[0].classList.add('active')
  inputField.focus() // Focus the input field
}

// Event listeners
inputField.addEventListener('input', initTyping)
tryAgainBtn.addEventListener('click', resetGame)


// Load initial paragraph
loadParagraph()
