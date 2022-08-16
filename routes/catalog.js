const express = require('express')
const router = express.Router()

// Import/Require Controller modules.
const author_controller = require('../controllers/authorController')
const book_controller = require('../controllers/bookController')
const bookinstance_controller = require('../controllers/bookinstanceController')
const genre = require('../controllers/genreController')

// ----------------------------------------------------------------------------

// AUTHOR ROUTES //

    // GET request for creating Author. 
    // NOTE This must come before route for id (i.e. display author).
    router.get('/author/create', author_controller.author_create_get)

    // POST request for creating Author.
    router.post('/author/create', author_controller.author_create_post)

    // GET request for delete Author.
    router.get('/author/:id/delete', author_controller.author_delete_get)

    // POST request for delete Author.
    router.post('/author/:id/delete', author_controller.author_delete_post)

    // GET request for update Author.
    router.get('/author/:id/update', author_controller.author_update_get)

    // POST request for update Author.
    router.post('/author/:id/update', author_controller.author_update_post)

    // GET request for one author
    router.get('/author/:id', author_controller.author_detail)

    // GET request for list of all authors
    router.get('/authors', author_controller.author_list)

// BOOK ROUTES //
    
    // GET catalog home page
    router.get('/', book_controller.index)

    // GET request for creating Book.
    router.get('/book/create', book_controller.book_create_get)

// BOOK INSTANCE ROUTES //

// GENRE ROUTES //
