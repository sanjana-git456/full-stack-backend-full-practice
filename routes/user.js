const express = require('express')
const router = express.Router()
const User = require('../models/User')

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

router.get('/users', async (req,res,next) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
})

router.get('/users/:id', async (req,res,next) => {
    try {
        const findId = await User.findById(req.params.id)
        res.status(200).json(findId)
    } catch (err) {
        next(err)
    }
})

router.delete('/users/:id', async (req,res,next) => {
    try {
        const findbyidanddelete = await User.findByIdAndDelete(req.params.id)
        res.status(200).json(findbyidanddelete)
    } catch (err) {
        next(err)
    }
})

module.exports = router