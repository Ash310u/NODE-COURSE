console.log('client side js file is loaded');

// query selector
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

// get element by id
const msg = document.getElementById('msg')
const forecast = document.getElementById('forecast')
const temperature = document.getElementById('temperature')
const feelslike = document.getElementById('feelslike')
const time = document.getElementById('time')
const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')

weatherForm.addEventListener('submit', (e) => {
    // it's prevent the browser to be default
    e.preventDefault();

    const location = search.value

    msg.innerHTML = `Loading...`
    forecast.innerHTML = ``;
    temperature.innerHTML = ``;
    feelslike.innerHTML = ``;
    time.innerHTML = ``;
    latitude.innerHTML = ``;
    longitude.innerHTML = ``;

    fetch(`https://giddy-garb-yak.cyclic.app/?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg.innerHTML = data.error;
            } else {
                msg.innerHTML = data.location;
                forecast.innerHTML = data.forecast;
                temperature.innerHTML = data.temperature;
                feelslike.innerHTML = data.feelslike;
                time.innerHTML = data.time;
                latitude.innerHTML = data.latitude;
                longitude.innerHTML = data.longitude;
            }
        })
    });
}) 