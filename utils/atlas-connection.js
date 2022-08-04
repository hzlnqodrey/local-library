const atlasPassword = require('./auth/atlas-password')

const mongoose = require('mongoose')

mongoose.connect(atlasPassword, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})