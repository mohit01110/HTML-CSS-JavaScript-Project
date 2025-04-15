const countdown = document.querySelector('#countdown')
const targetDate = new Date('2030-01-01T00:00:00')

function updateCountdown() {
  const currentDate = new Date()
  const timeDifference = targetDate - currentDate

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60)
  )
  const seconds = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / 1000)

  countdown.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`


}

setInterval(updateCountdown, 1000)
