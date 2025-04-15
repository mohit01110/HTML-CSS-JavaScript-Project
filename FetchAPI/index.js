let fetchAPI = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!response.ok) {
      throw new Error('Something went wrong')
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
fetchAPI()
