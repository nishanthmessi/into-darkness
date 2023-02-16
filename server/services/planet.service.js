const Planet = require('../models/planets.model')
const { STATUS } = require('../utils/statuscodes')

const createPlanet = async (planetData) => {
  try {
    const planet = await Planet.create(planetData)
    return planet
  } catch (error) {
    throw {error: error, code: STATUS.UNPROCESSABLE_ENTITY}
  }
}

const getPlanets = async (filter) => {
  let query = {}
  if(filter.planetName) {
    query.planetName = filter.planetName
  }

  let planets = await Planet.find(query)
  if(!planets) {
    throw {
      error: 'Unable to fetch planets data',
      code: STATUS.NOT_FOUND
    }
  }
}