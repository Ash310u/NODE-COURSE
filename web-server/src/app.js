const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()

// Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'ash'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about',
        name: 'ash'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help',
        name: 'ash'
    })
})

// app.com/weather--->
app.get('/weather', (req, res) => {
    if (!req.query.address) {
    return res.send({
            error: 'You must provide a address!'
        })
    }
    res.send({
        forecast: 'rain',
        address:req.query.address
    });
})
app.get('/product', (req, res) => {
    if (!req.query.search) {
        // By using return we are stopping the function execution.
        return res.send({
            error: 'You must provide a search term'
        })
    }
    // we can also do the same thing using else but using return is a pretty common pattern with Express.
    res.send({
        product: [],
    });
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 404,
        errorMsg: 'Help article not found',
        name: 'ash'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 404,
        errorMsg: 'Page not found',
        name: 'ash'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000.');
})