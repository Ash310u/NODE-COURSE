const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address');
} else {              // here we are using Default Function Parameters in next line--->
    geocode(address, (error, {lat, lon, location,localtime} = {}) => { 
        if (error) {
            console.log(error);
        } else {
            forecast(lat, lon, location,localtime,(error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(
                        `At ${lat} Latitude & ${lon} Longitude this location is ${location}. It's ${data.weatherDescriptions}. It is currently : ${data.temperature} degress outside & feels like : ${data.feelslike} degress outside. Local Date & time : ${data.localtime}`
                    );
                }
            });
        }
    });   
}