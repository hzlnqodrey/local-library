const Book = require('../models/book')

// Index Site Home Page
exports.index = (req, res) => {
    res.send('Site Home Page')
}

// Display list of all books
exports.book_list = (req, res) => {
    res.send('Book List')
}