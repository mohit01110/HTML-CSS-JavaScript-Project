function fetchJokes() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => {
      const jokeElement = document.getElementById('joke')
      jokeElement.textContent = data.value
    })
    .catch((error) => {
      console.error('Error fetching jokes:', error)
    })
}

fetchJokes()
