const express = require('express');
const router = express.Router();

// Models images

// Get a Home
router.get('/', function(req, res) {
    res.render('./_layouts/home', {
        title: res.__('title_home')
    });
});

// Exports
module.exports = router;