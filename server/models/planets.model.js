const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  planetName: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  planetOrder: {
    type: String,
    required: true
  },
  distancefromSun: {
    type: Number,
    required: true
  },
  lightTimetoSun: {
    type: Number,
    required: true
  },
  yearLength: {
    type: Number,
    required: true
  },
  planetType: {
    type: String,
    required: true
  },
  planetDetails: {
    description: {
      type: String,
      required: true
    },
    namesake: {
      type: String,
      required: true
    },
    potentialforLife: {
      type: String,
      required: true
    },
    sizenDistance: {
      type: String,
      required: true
    },
    orbitnRotation: {
      type: String,
      required: true
    },
    moons: {
      type: String,
      required: true
    }
  }
},  {timestamps: true})

const Planet = mongoose.model('Planet', planetSchema)

module.exports = Planet