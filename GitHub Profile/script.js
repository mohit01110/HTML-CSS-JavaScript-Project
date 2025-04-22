let input = document.getElementById('input')
let btn = document.getElementById('btn')
let output = document.querySelector('.output')

function fetchProfile() {
  let username = input.value
  if (!username) {
    alert('Please enter a username')
    return
  }
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response is not OK')
      }
      return response.json()
    })
    .then((data) => {
      displayProfile(data)
    })
    .catch((error) => {
      output.innerHTML = `<p>${error.message}</p>`
    })
}

function displayProfile(profileData) {
  output.innerHTML = `
  <div id="profile">
  <h2>${profileData.login}</h2>
  <img src="${profileData.avatar_url}" style="width:100px; height:100px; border-radius:50%"/>
      <p>Followers: ${profileData.followers}</p>
      <p>Repositories: ${profileData.public_repos}</p>
  </div>
  `
}

btn.addEventListener('click', fetchProfile)
