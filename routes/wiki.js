// wiki.js - Wiki route module.

const express = require('express')
const router = express.Router()

// Wiki Home Page route.
router.get('/', (req, res, next) => {
    res.send('Wiki home page')
})