const { error } = require('console')
const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=11388a4160847cee46b22a078180de9e&query=22.5726,88.3639'

const request = http.request(url, (response) => {
    let data =''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end',() => {
        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log('An', error);
})

request.end()