const API_KEY = 'k9scr4rj3c9wxzap794qmr3r'

const fetchingData = query => {
  fetch(
    `http://api.walmartlabs.com/v1/search?apiKey=${API_KEY}&query=${query}`,
  ).then(response => response.json())
}

export default fetchingData
