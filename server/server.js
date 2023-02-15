require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Welcome to Planets server")
})

app.listen(5000, async() => {
  console.log(`Server listening on 5000`)
})