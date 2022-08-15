const Book = require('../models/book')

// Index Site Home Page
exports.index = (req, res) => {
    res.send('Site Home Page')
}