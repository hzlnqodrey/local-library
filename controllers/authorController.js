const Author = require('../models/author')

// Display list of all Authors.
exports.author_list = (req, res) => {
    res.send('Author List')
}

// Display detail page for a specific Author.
exports.author_detail = (req, res) => {
    res.send(`Author Detail: ${req.params.id} `)
}

// Display Author create form on GET.
exports.author_create_get = (req, res) => {
    res.send('Author Create Get')
}

// Handle Author create form on POST.
exports.author_create_post = (req, res) => {
    res.send('Author Create Post')
}

// Display Author delete form on GET.
exports.author_delete_get = (req, res) => {
    res.send('Author Delete Get')
}