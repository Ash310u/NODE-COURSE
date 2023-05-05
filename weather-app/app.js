const request = require("postman-request");


const placeName = `New york`
const GeocodeURL = `https://us1.locationiq.com/v1/search?key=pk.bbb941e8068fd9d57e6f8705a6c4d8ec&q=${placeName}&format=json&limit=1`;

request({ url: GeocodeURL, json: true }, (error, response) => {
    const lat = response.body[0].lat
    const lon = response.body[0].lon

    const ForecastURL = `http://api.weatherstack.com/current?access_key=11388a4160847cee46b22a078180de9e&query=${lat},${lon}&units=m`;

    request({ url: ForecastURL, json: true }, (error, response) => {
        const { feelslike, temperature, weather_descriptions } = response.body.current;
        console.log(`At ${lat} Latitude & ${lon} Longitude, It's ${weather_descriptions}. It is currently ${temperature} degress outside. It feels like ${feelslike} degress outside.`);
    })

})