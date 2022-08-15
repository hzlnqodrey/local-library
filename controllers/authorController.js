const Author = require('../models/author')

// Display list of all Authors.
exports.author_list = (req, res) => {
    res.send('Author List')
}