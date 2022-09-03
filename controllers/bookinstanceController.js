const BookInstance = require('../models/bookinstance')
const Book = require('../models/book')

const { body, validationResult } = require('express-validator')

// Display list of all BookInstances.
exports.bookinstance_list = (req, res, next) => {

    BookInstance.find()
        .populate('book')
        .exec( function (err, bookinstance_result) {
            if ( err ) { return next(err) }

            // Succesfull, so render
            res.render('bookinstance_list', {
                title: 'Book Instance List',
                bookinstance_list: bookinstance_result
            })
        })

}

// Display detail page for a specific BookInstance
exports.bookinstance_detail = (req, res, next) => {
    BookInstance.findById(req.params.id)
        .populate('book')
        .exec((err, bookinstance) => {
            if (err) { return next(err) }

            if (bookinstance == null) {
                const err = new Error("Bookinstance not found")
                err.status = 404
                return next(err)
            }

            res.render('bookinstance_detail', {
                title: bookinstance.book.title,
                bookinstance
            })
        })
}

// Display BookInstance create form on GET.
exports.bookinstance_create_get = (req, res, next) => {
    Book.find({}, 'title')
        .exec((err, books) => {
            if ( err ) {
                return next(err)
            }

            // Successful, so render
            res.render('bookinstance_form', {
                title: "Create BookInstance",
                book_list: books,
            })
        })
}

// Handle BookInstance create form on POST.
exports.bookinstance_create_post = [

    // Validation and Sanitization the form fields first
    body('book', "Book must be specified")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body('imprint', "Imprint must be specified")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body('status')
        .escape(),
    body('due_back', 'Invalid date')
        .optional({ checkFalsy: true })
        .isISO8601()
        .toDate(),
]

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = (req, res) => {
    res.send('BookInstance Delete Get')
}

// Handle BookInstance delete form on POST.
exports.bookinstance_delete_post = (req, res) => {
    res.send('BookInstance Delete Post')
}

// Display BookInstance update form on GET.
exports.bookinstance_update_get = (req, res) => {
    res.send('BookInstance update Get')
}

// Handle BookInstance update form on POST.
exports.bookinstance_update_post = (req, res) => {
    res.send('BookInstance update Post')
}

