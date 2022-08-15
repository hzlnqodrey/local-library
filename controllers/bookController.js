const Book = require('../models/book')

// Index Site Home Page
exports.index = (req, res) => {
    res.send('Site Home Page')
}

// Display list of all books
exports.book_list = (req, res) => {
    res.send('Book List')
}

// Display detail page for a specific book
exports.book_detail = (req, res) => {
    res.send(`Book Detail: ${req.params.id}`)
}

// Display Book create form on GET
exports.book_create_get = (req, res) => {
    res.send('Book Create Get')
}

// Handle Book create form on POST
exports.book_create_post = (req, res) => {
    res.send('Book Create Post')
}

// Display Book delete form on GET
exports.book_delete_get = (req, res) => {
    res.send('Book delete Get')
}

// Handle Book delete form on POST
exports.book_delete_post = (req, res) => {
    res.send('Book delete Post')
}

// Display Book update form on GET
exports.book_update_get = (req, res) => {
    res.send('Book update Get')
}

// Handle Book update form on POST
exports.book_update_post = (req, res) => {
    res.send('Book update Post')
}