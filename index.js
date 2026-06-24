require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err))

const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')

app.use('/api', userRoutes)
app.use('/api', authRoutes)

app.get('/', (req,res) => {
    res.send('Hello from express')
})

app.get('/about', (req,res) => {
    res.json({ name: "Sanjana", role: "Full Stack Developer" })
})

app.get('/health', (req,res) => {
    res.json({ status: "ok" })
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err.message })
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})