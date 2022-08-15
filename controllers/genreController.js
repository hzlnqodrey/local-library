const Genre = require('../models/genre')

// Display list of all genre
exports.genre_list = (req, res) => {
    res.send('Genre List')
}