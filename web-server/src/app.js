const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('',(req,res) => {
    res.render('index', {
        title:'weather',
        name:'ash'
    })
})

app.get('/about', (req,res) => {
    res.render('about',{
        title:'about',
        name:'ash'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title:'help',
        name:'ash'
    })
})

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