const request = require("postman-request");


// const placeName = `kolkata`
// const GeocodeURL = `https://us1.locationiq.com/v1/search?key=pk.bbb941e8068fd9d57e6f8705a6c4d8ec&format=json&q=${placeName}&limit=1`;


// request({ url: GeocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log(`Unble to connect to weather service!`);
//     } else if (response.body.error) {
//         console.log(`Unble to find location. Try another search`);
//     } else {
//         const location = response.body[0].display_name
//         const lat = response.body[0].lat
//         const lon = response.body[0].lon


//     }
// })
const ForecastURL = `http://api.weatherstack.com/current?access_key=11388a4160847cee46b22a078180de9e&query=${lat},${lon}&units=m`;

request({ url: ForecastURL, json: true }, (error, response) => {
    const { feelslike, temperature, weather_descriptions } = response.body.current;
    console.log(`At ${lat} Latitude & ${lon} Longitude this location is ${location}. It's ${weather_descriptions}. It is currently ${temperature} degress outside. It feels like ${feelslike} degress outside.`);
})

geocode('kolkata', (error, data) => {
    if (data == undefined) {
        console.log(error);
    } else {
        console.log(data);
    }
})