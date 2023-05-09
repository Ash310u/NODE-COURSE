const express = require('express')

const app = express()

// app.com--->
app.get('',(req,res) => {
    res.send('Hello Express!');
})

// app.com/help--->
app.get('/help',(req,res) => {
    res.send('help page!');
})

// app.com/about--->
app.get('/about',(req,res) => {
    res.send('about page');
})

// app.com/weather--->
app.get('/weather',(req,res) => {
    res.send('weather forecast page');
})

app.listen(3000,() => {
    console.log('server is up on port 3000.');
})