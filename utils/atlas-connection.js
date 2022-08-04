const atlasPassword = require('./auth/atlas-password')

const mongoose = require('mongoose')

mongoose.connect(atlasPassword, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', console.error.bind(console, "MongoDB connection error"))

module.exports = db 