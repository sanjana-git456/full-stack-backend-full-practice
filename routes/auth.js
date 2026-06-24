const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/login', (req, res) => {
    res.json( {message: `Welcome, ${req.body.username}`} )
})

router.post('/register', async (req,res,next) => {
    try {
        const { name, email, password } = req.body
        const user = new User({ name, email, password })
        await user.save()

        res.status(201).json({ message: 'User created', user })
    } catch (err) {
        next(err)
    }
})

module.exports = router