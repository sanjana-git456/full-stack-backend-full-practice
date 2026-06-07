const express = require('express')
const app = express()

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



app.listen(3000, () => {
    console.log('Server running on port 3000')
})