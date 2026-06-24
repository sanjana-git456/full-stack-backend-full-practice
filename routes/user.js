const express = require('express')
const router = express.Router()

router.get('/user/:id', (req,res) => {
    const id = req.params.id

    if (id === '0') {
        return res.status(404).json({ error: "User not found" })
    }
    
    res.json( {userId: req.params.id} )
})

router.get('/search', (req,res) => {
    res.json( {searchedFor: req.query.name} )
})

module.exports = router