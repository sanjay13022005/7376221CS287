const express = require('express')
const app = express()
const PORT = 4000
app.get('/',(req,res) =>
     res.send('Hello World-7376221CS287-SANJAY G'))
app.listen(PORT,() =>console.log('Example app listening at http://localhost:${PORT}'))
