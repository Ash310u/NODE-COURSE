const path = require('path')
const express = require('express')

const app = express()

const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))



// app.com/weather--->
app.get('/weather',(req,res) => {
    res.send({
        forecast:'rain',
        location:'kolkata'
    });
})

app.listen(3000,() => {
    console.log('server is up on port 3000.');
})