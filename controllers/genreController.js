const Genre = require('../models/genre')

// Display list of all genre
exports.genre_list = (req, res) => {
    res.send('Genre List')
}

// Display detail page for a specific genre
exports.genre_detail = (req, res) => {
    res.send(`Genre Detail: ${req.params.id}`)
}

// Display Genre create form on GET.
exports.genre_create_get = (req, res) => {
    res.send('Genre Create Get')
}

// Handle Genre create form on POST.
exports.genre_create_post = (req, res) => {
    res.send('Genre Create Post')
}