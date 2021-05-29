const express = require('express')
const app = express()
const port = 8080
const path = require('path')

const staticPath = path.join(__dirname,'../')
console.log(staticPath)
app.use(express.static(staticPath))

app.get('/', (req, res) => { 
    res.send("Home Page running....")
})

app.get('/about', (req, res) => { 
    res.send("About Page running....")
})

app.listen(port, ()=>{console.log(`Listening the port at ${port}`)})