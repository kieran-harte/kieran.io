const express = require('express')
const path = require('path')
const fs = require('fs')
const morgan = require('morgan')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('colors')
const xss = require('xss-clean')
const rateLimit = require('express-rate-limit')
const hpp = require('hpp')

const PORT = process.env.PORT || 5005

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(morgan(process.env.NODE_ENV === 'dev' ? 'dev' : 'common'))
app.use(xss())
app.use(hpp())

// Limit requests to 1000 per minutes
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 1000,
})
app.use(limiter)

// Set static folder
app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(express.static(path.join(__dirname, '..', 'src', 'static')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'app', 'index.html'))
})

// Start server
const server = app.listen(
  PORT,
  console.log(`Server started on port ${PORT}`.yellow.bold)
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`.red)
  // Close server and exit process
  server.close(() => process.exit(1))
})
