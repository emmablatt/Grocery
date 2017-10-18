const API_KEY = 'mzWY9K16xqEHNxom233MhGiTSkVRBQbdFGDR2Jp7'

const fetchingData = query => {
  return fetch(
    `https://api.nal.usda.gov/ndb/search/?format=json&q=${query}&ds=Standard Reference&api_key=${API_KEY}`,
  )
}

export default fetchingData

// api key (usda): mzWY9K16xqEHNxom233MhGiTSkVRBQbdFGDR2Jp7
// parameters: q (query), ds (data source – choose standard reference),
// api ref: https://ndb.nal.usda.gov/ndb/doc/apilist/API-SEARCH.md
// food search: https://ndb.nal.usda.gov/ndb/search/list
