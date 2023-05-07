const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address');
} else {
    geocode(address, (error, data) => {
        if (error) {
            console.log(error);
        } else {
            const {lat, lon, location} = data
            forecast(lat, lon, location,(error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(
                        `At ${lat} Latitude & ${lon} Longitude this location is ${location}. It's ${data.weatherDescriptions}. It is currently ${data.temperature} degress outside. It feels like ${data.feelslike} degress outside.`
                    );
                }
            });
        }
    });   
}