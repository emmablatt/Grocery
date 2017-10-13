const API_KEY = 'k9scr4rj3c9wxzap794qmr3r'

const fetchingData = query => {
  return fetch(
    `https://api.walmartlabs.com/v1/search?apiKey=${API_KEY}&query=${query}`,
  )
}

export default fetchingData
