const Author = require('../models/author')

// Display list of all Authors.
exports.author_list = (req, res) => {
    res.send('Author List')
}

// Display detail page for a specific Author.
exports.author_detail = (req, res) => {
    res.send(`Author Detail: ${req.params.id} `)
}