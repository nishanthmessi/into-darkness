const planetService = require('../services/planet.service')
const { successResponseBody, errorResponseBody } = require('../utils/responsebody')
const {STATUS} = require('../utils/statuscodes')

// Create new planet
const createPlanet = async (req, res) => {
  try {
    const response = await planetService.createPlanet(req.body)
    successResponseBody.data = response
    successResponseBody.message = "New Planet added successfully" 
    return res.status(STATUS.CREATED).json(successResponseBody)
  } catch (error) {
    console.log(error)
    errorResponseBody.err = error
    errorResponseBody.message = "Unable to create Planet. Try again"
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody)
  }
}

// Get all planets
const getPlanets = async (req, res) => {
  try {
    const response = await planetService.getPlanets(req.query)
    successResponseBody.data = response
    successResponseBody.message = "All planets fetched successfully" 
    return res.status(STATUS.OK).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    errorResponseBody.message = "Error fetching all planets"
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody)
  }
}

// Get single planet
const getPlanet = async (req, res) => {
  try {
    const response = await planetService.getPlanet(req.params.id)
    successResponseBody.data = response
    successResponseBody.message = "Planet fetched successfully" 
    return res.status(STATUS.OK).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    errorResponseBody.message = "Error fetching planet data"
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody)
  }
}

// Update planet data
const updatePlanet = async (req, res) => {
  try {
    const response = await planetService.updatePlanet(req.params.id, req.body)
    successResponseBody.data = response
    successResponseBody.message = "Updated successfully" 
    return res.status(STATUS.OK).json(successResponseBody)
  } catch (error) {
    console.log(error)
    errorResponseBody.err = error
    errorResponseBody.message = "Unable to update planet details"
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody)
  }
}

// Delete a planet data
const deletePlanet = async (req, res) => {
  try {
    const response = await planetService.delete(req.params.id)
    successResponseBody.body = response
    successResponseBody.message =  `${response.planetName} is deleted successfully`
    return res.status(STATUS.OK).json(successResponseBody)
  } catch (error) {
    errorResponseBody.err = error
    errorResponseBody.message = "Unable to delete planet"
    return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody)
  }
}

module.exports = {
  createPlanet, getPlanets, getPlanet, updatePlanet, deletePlanet
}