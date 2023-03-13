const { response } = require('express')
const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    response.send('Hello WORLD')
})

console.log("yo")