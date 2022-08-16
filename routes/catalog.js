const express = require('express')
const router = express.Router()

// Import/Require Controller modules.
const author_controller = require('../controllers/authorController')
const book_controller = require('../controllers/bookController')
const bookinstance_controller = require('../controllers/bookinstanceController')
const genre = require('../controllers/genreController')