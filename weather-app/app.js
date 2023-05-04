const request = require("postman-request");

const url = `http://api.weatherstack.com/current?access_key=11388a4160847cee46b22a078180de9e&query=24.3725,87.8488&units=m`;

request({url: url, json: true},(error, response) => {
    const {feelslike, temperature, weather_descriptions} = response.body.current;
    console.log(`${weather_descriptions}. It is currently ${temperature} degress outside. It feels like ${feelslike} degress outside.`);
})