const express = require('express');
const router = express.Router();

// Models images

// Get a Menu
router.get('/', function(req, res) {
    res.render('./_layouts/menu-page', {
        title: 'Menu'
    });
});

// Exports
module.exports = router;