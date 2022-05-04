'use strict';
const express = Require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('templates', {
        locals: {
            title: "Home Page"
        },
        partials: {
            body: "partials/home"
        }
    })
})

module.exports = router;