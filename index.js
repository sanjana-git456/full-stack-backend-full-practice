const express = require('express')
const app = express()
app.use(express.json())

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})

app.get('/', (req,res) => {
    res.send('Hello from express')
})

app.get('/about', (req,res) => {
    res.json({ name: "Sanjana", role: "Full Stack Developer" })
})

app.get('/health', (req,res) => {
    res.json({ status: "ok" })
})

app.get('/user/:id', (req,res) => {
    res.json( {userId: req.params.id} )
})

app.get('/search', (req,res) => {
    res.json( {searchedFor: req.query.name} )
})

app.post('/login', (req, res) => {
    res.json( {message: `Welcome, ${req.body.username}`} )
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})