const express = require('express')
const router = express.Router()

// Import/Require Controller modules.
const author_controller = require('../controllers/authorController')
const book_controller = require('../controllers/bookController')
const bookinstance_controller = require('../controllers/bookinstanceController')
const genre = require('../controllers/genreController')

// ----------------------------------------------------------------------------

// AUTHOR ROUTES //

    // GET request for one author
    router.get('/author/:id', author_controller.author_detail)

    // GET request for list of all authors
    router.get('/authors', author_controller.author_list)

// BOOK ROUTES //

// BOOK INSTANCE ROUTES //

// GENRE ROUTES //
