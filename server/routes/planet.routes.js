const planetMiddleware = require('../middlewares/planet.middleware')
const planetController = require('../controllers/planet.controller')

const routes = (app) => {
  // New planet creation route
  app.post('/api/planet/create',
    planetController.createPlanet,
    planetMiddleware.validatePlanetCreateReq
  )
  // Fetch planets route
  app.get('/api/planets',
    planetController.getPlanets,
  )
  // Fetch a single planet route
  app.get('api/planet/:id',
    planetController.getPlanet,
  )
  // Update planet route
  app.put('api/planet/update/:id',
    planetController.updatePlanet,
  )
  // Delete planet route
  app.delete('api/planet/delete/:id',
    planetController.deletePlanet,
  )
}

module.exports = routes