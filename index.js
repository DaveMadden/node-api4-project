require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()
server.use(express.json())

server.get('/api/users', (req, res)=>{
    res.json([
        { id: 1, username: `darwin`, pwd: "phasma" },
        { id: 2, username: `wallace`, pwd: "monster_truck" },
        { id: 3, username: `maxwell`, pwd: "pizza" },
    ])
})

server.post('/api/register', (req, res)=>{
    res.json({message: `registered`})
})

server.post('/api/login', (req, res)=>{
    res.json({message: `welcome!`})
})

// server.get('/', (req,res)=>{
//     res.send("try adding '/api/users' to the url!")
// })
// server.get('*', (req,res)=>{
//     res.send("that's not a valid path but you're still a worthwhile person and i appreciate you")
// })

const PORT = process.env.PORT || 8000

server.listen(PORT, ()=>{console.log("listening on port ", PORT)})