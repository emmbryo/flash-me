/**
 * The starting point of the application.
 *
 * @author Emma Fransson <ef222hr@student.lnu.se>
 * @version 1.0.0
 */

import { container } from './config/bootstrap.js'

import express from 'express'
import expressLayouts from 'express-ejs-layouts'
import session from 'express-session'
import logger from 'morgan'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { router } from './routes/router.js'
import helmet from 'helmet'


// Creates an Express application.
const app = express()

app.set('container', container)

// Get the directory name of this module's path.
const directoryFullName = dirname(fileURLToPath(import.meta.url))

// Set the base URL to use for all relative URLs in a document.
const baseURL = process.env.BASE_URL || '/'

// Set up a morgan logger using the dev format for log entries.
app.use(logger('dev'))

// Set up helmet.
app.use(helmet())

// View engine setup.
app.set('view engine', 'ejs')
app.set('views', join(directoryFullName, 'views'))
app.use(expressLayouts)
app.set('layout', join(directoryFullName, 'views', 'layouts', 'default'))

// Parse requests of the content type application/x-www-form-urlencoded.
// Populates the request object with a body object (req.body).
app.use(express.urlencoded({ extended: false }))

// Serve static files.
app.use(express.static(join(directoryFullName, '..', 'public')))

const sessionOptions = {
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 69 * 60 * 24, // 1 day
    sameSite: 'strict'
  }
}

app.use(session(sessionOptions))

// Middleware to be executed before the routes.
app.use((req, res, next) => {
  // Pass the base URL to the views.
  if (req.session.flash) {
    res.locals.flash = req.session.flash
    delete req.session.flash
  }
  res.locals.baseURL = baseURL

  next()
})


if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
}

// Register routes.
app.use('/', router)

// Error handler.
app.use(function (err, req, res, next) {
  // 404 Not Found.
  if (err.status === 404) {
    return res
      .status(404)
      .sendFile(join(directoryFullName, 'views', 'errors', '404.html'))
  }

  // 500 Internal Server Error (in production, all other errors send this response).
  if (req.app.get('env') !== 'development') {
    return res
      .status(500)
      .sendFile(join(directoryFullName, 'views', 'errors', '500.html'))
  }

  // Development only!
  // Only providing detailed error in development.

  // Render the error page.
  res
    .status(err.status || 500)
    .render('errors/error', { error: err })
})

// Starts the HTTP server listening for connections.
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}. NODE_ENV is set to ${process.env.NODE_ENV}`)
  console.log('Press Ctrl-C to terminate...')
})
