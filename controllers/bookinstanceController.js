const BookInstance = require('../models/bookinstance')

// Display list of all BookInstances.
exports.bookinstance_list = (req, res) => {
    res.send('BookInstance List')
}