const express = require('express')
const router = express.Router()
const User = require('../models/User')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

router.post('/register', async (req,res,next) => {
    try {
        const { name, email, password } = req.body
        const hashedpassword = await bcrypt.hash(password, 10)
        const user = new User({ name, email, password: hashedpassword })
        await user.save()

        res.status(201).json({ message: 'User created', user })
    } catch (err) {
        next(err)
    }
})

router.post('/login', async (req,res,next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ error: 'User not found' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ error: 'Wrong password'})
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        res.status(200).json({ message: 'Login successful', token })
    } catch (err) {
        next(err)
    }
})

module.exports = router