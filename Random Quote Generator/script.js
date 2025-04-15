const btn = document.getElementById('btn')
const quote = document.querySelector('.quote')

let quotes = [
  'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  'The way to get started is to quit talking and begin doing.',
  'Success is walking from failure to failure with no loss of enthusiasm.',
  'The future belongs to those who believe in the beauty of their dreams.',
  "Don't watch the clock; do what it does. Keep going.",
  'Success is walking from failure to failure with no loss of enthusiasm.',
  'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
]

btn.addEventListener('click', () => {
  console.log('clicked')
  let random = Math.floor(Math.random() * quotes.length)
  quote.textContent = quotes[random]
})
