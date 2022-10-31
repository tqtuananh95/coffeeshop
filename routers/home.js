const express = require('express');
const router = express.Router();

// Models images
const images = require('../models/images');

// Get a Home
router.get('/', function(req, res) {
    res.render('./_layouts/home', {
        title: 'Home'
    });
});

// Exports
module.exports = router;