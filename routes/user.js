const express = require('express')
const router = express.Router()

router.get('/user/:id', (req,res) => {
    res.json( {userId: req.params.id} )
})

router.get('/search', (req,res) => {
    res.json( {searchedFor: req.query.name} )
})

module.exports = router