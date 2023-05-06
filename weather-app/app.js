const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("kolkata", (error, data) => {
    if (data == undefined) {
        console.log(error);
    } else {
        const {lat, lon, location} = data
        forecast(lat, lon, location,(error, data) => {
            if (data == undefined) {
                console.log(error);
            } else {
                console.log(
                    `At ${lat} Latitude & ${lon} Longitude this location is ${location}. It's ${data.weatherDescriptions}. It is currently ${data.temperature} degress outside. It feels like ${data.feelslike} degress outside.`
                );
            }
        });
    }
});
