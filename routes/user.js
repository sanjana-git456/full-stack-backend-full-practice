const express = require('express')
const router = express.Router()

router.get('/user/:id', (req,res,next) => {
    const id = req.params.id

    if (id === '0') {
        const error = new Error("User not found")
        error.status = 404
        return next(error)
    }
    res.status(200).json({ userId: id })
})

router.get('/search', (req,res) => {
    res.json( {searchedFor: req.query.name} )
})

module.exports = router