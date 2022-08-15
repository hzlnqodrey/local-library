const BookInstance = require('../models/bookinstance')

// Display list of all BookInstances.
exports.bookinstance_list = (req, res) => {
    res.send('BookInstance List')
}

// Display detail page for a specific BookInstance
exports.bookinstance_detail = (req, res) => {
    res.send(`BookInstance Detail: ${req.params.id}`)
}

// Display BookInstance create form on GET.
exports.bookinstance_create_get = (req, res) => {
    res.send('BookInstance Create Get')
}