const express = require('express')
const app = express()
app.get('/', (req,res) => {
    res.send('Hello from express')
})
app.listen(3000, () => {
    console.log('Server running on port 3000')
})
app.get('/about', (req,res) => {
    res.json({ name: "Sanjana", role: "Full Stack Developer" })
})
app.get('/health', (req,res) => {
    res.json({ status: "ok" })
})