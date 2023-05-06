const request = require("postman-request");

const forecast = (lat,lon,location, callback) => {

    const ForecastURL = `http://api.weatherstack.com/current?access_key=11388a4160847cee46b22a078180de9e&query=${lat},${lon}&units=m`;

        request({ url: ForecastURL, json: true }, (error, response) => {
            
            if (error) {
                callback(`Unble to connect to weather service!`, undefined);
            } else if (response.body.error) {
                callback(`Unble to find location. Try another search`, undefined);
            } else {
                callback(
                    undefined,
                    {
                        feelslike: response.body.current.feelslike,
                        temperature: response.body.current.temperature,
                        weatherDescriptions: response.body.current.weather_descriptions
                    }
                )
            }
            

        })   

}

module.exports = forecast;