const express = require('express');
const router = express.Router();

// Models images

// Get a Design
router.get('/design-home-page', function(req, res) {
    res.render('./_layouts/admin/design-home-page', {
        title: 'Design'
    });
});

// Exports
module.exports = router;