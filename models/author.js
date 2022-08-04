const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AuthorSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
            maxLength: 100
        },

        last_name: {
            type: String,
            required: true,
            maxLength: 100
        },

        date_of_birth: {
            type: Date
        },

        date_of_death: {
            type: Date
        }
    }
)