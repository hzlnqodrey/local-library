const Genre = require('../models/genre')

// Display list of all genre
exports.genre_list = (req, res) => {
    res.send('Genre List')
}

// Display detail page for a specific genre
exports.genre_detail = (req, res) => {
    res.send(`Genre Detail: ${req.params.id}`)
}