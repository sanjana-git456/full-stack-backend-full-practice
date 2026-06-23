const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
    res.json( {message: `Welcome, ${req.body.username}`} )
})

module.exports = router