require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const PlanetRoutes = require("./routes/planet.routes")

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Welcome to Planets server")
})

// Planets Route
PlanetRoutes(app)

// Connect to server and db
const PORT = process.env.PORT

app.listen(PORT, async() => {
  console.log(`Server listening on ${PORT}`)
  mongoose.set('strictQuery', false);
  try {
    mongoose.connect(process.env.PROD_DB)
    console.log('Connected to DB')
  } catch (error) {
    console.log('Unable to connect', error)
  }
})