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

