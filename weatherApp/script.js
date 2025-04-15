const input = document.querySelector('input')
const btn = document.getElementById('btn')
const icon = document.querySelector('.icon')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description')

btn.addEventListener('click', () => {
  let city = input.value

  getWeather(city)
})

function getWeather(city) {
  console.log(city)

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
      weather.textContent = data.weather[0].main
      temperature.textContent = `${Math.round(data.main.temp) - 273}°C`
      description.textContent = data.weather[0].description
    })
    .catch((error) => console.log(error))
}

const apiKey = '0879c7344dfc79b0a0f9d75d08fb1a7c'
