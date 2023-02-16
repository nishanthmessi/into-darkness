const { errorResponseBody } = require('../utils/responsebody')
const { STATUS } = require ('../utils/statuscodes')

const validatePlanetCreateReq = async (req, res, next) => {
  // Check planet name is provided
  if(!req.body.planetName) {
    errorResponseBody.err = 'Planet name is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Sub-title is provided
  if(!req.body.subTitle) {
    errorResponseBody.err = 'Sub-title is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Planet order is provided 
  if(!req.body.planetOrder) {
    errorResponseBody.err = 'Planet order name is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Distance from Sun is provided
  if(!req.body.distancefromSun) {
    errorResponseBody.err = 'Distance from Sun is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check One-way Light Time is provided
  if(!req.body.lightTimetoSun) {
    errorResponseBody.err = 'One-way Light Time to Sun is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Year Length is provided
  if(!req.body.yearLength) {
    errorResponseBody.err = 'Year Length is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Planet type is provided
  if(!req.body.planetType) {
    errorResponseBody.err = 'Planet type is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Planet description is provided
  if(!req.body.planetDetails.description) {
    errorResponseBody.err = 'Planet description is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Namesake details is provided
  if(!req.body.planetDetails.namesake) {
    errorResponseBody.err = 'Namesake details is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Potential for Life details is provided
  if(!req.body.planetDetails.potentialforLife) {
    errorResponseBody.err = 'Potential for Life details is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Size & Distance details is provided
  if(!req.body.planetDetails.sizenDistance) {
    errorResponseBody.err = 'Size & Distance details is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Orbit & Rotation details is provided
  if(!req.body.planetDetails.orbitnRotation) {
    errorResponseBody.err = 'Orbit & Rotation details is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }
  // Check Moon details is provided
  if(!req.body.planetDetails.moons) {
    errorResponseBody.err = 'Moon details is required'
    return res.status(STATUS.UNPROCESSABLE_ENTITY).json(errorResponseBody)
  }

  next()
}

module.exports = { validatePlanetCreateReq }