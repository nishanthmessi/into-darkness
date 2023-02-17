const Planet = require('../models/planets.model')
const { STATUS } = require('../utils/statuscodes')

// Create a new planet
const createPlanet = async (planetData) => {
  try {
    const planet = await Planet.create(planetData)
    return planet
  } catch (error) {
    throw {error: error, code: STATUS.UNPROCESSABLE_ENTITY}
  }
}

// Get all planets data
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

  return planets
}

// Get single planet data
const getPlanet = async (id) => {
  const planet = await Planet.findById(id)
  if(!planet) {
    throw {
      error: 'Unable to find planet',
      code: STATUS.NOT_FOUND
    }
  }
}

// Update planet data
const updateBike = async (id, data) => {
  try {
    const planet = await Planet.findByIdAndUpdate(id, data)
    return planet
  } catch (error) {
    console.log(error)
    throw {error, code: STATUS.UNPROCESSABLE_ENTITY}
  }
}

// Delete planet data
const deletePlanet = async (id) => {
  try {
    const response = await Planet.findByIdAndDelete(id)
    if(!response) {
      throw {
        error: 'No planet found',
        code: STATUS.NOT_FOUND
      }
    }
    return response
  } catch (error) {
    console.log(error)
    throw {error: error, code: STATUS.UNPROCESSABLE_ENTITY}
  }
}

module.exports = {
  createPlanet, getPlanets, getPlanet, updateBike, deletePlanet
}