// query selector
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

// get element by id
const msg = document.getElementById('msg')
const forecast = document.getElementById('forecast')
const temperature = document.getElementById('temperature')
const feelslike = document.getElementById('feelslike')
const time = document.getElementById('time')
const humidity = document.getElementById('humidity')

weatherForm.addEventListener('submit', (e) => {
    // it's prevent the browser to be default
    e.preventDefault();

    const location = search.value

    msg.innerHTML = `Loading...`
    forecast.innerHTML = ``;
    temperature.innerHTML = ``;
    feelslike.innerHTML = ``;
    time.innerHTML = ``;
    humidity.innerHTML = ``;

    fetch(`https://ash-forecast.cyclic.app/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg.innerHTML = data.error;
            } else {
                msg.innerHTML = `Location : ${data.location}`;
                forecast.innerHTML = `Forecast : ${data.forecast}`;
                temperature.innerHTML = `Current temperature : ${data.temperature}`;
                feelslike.innerHTML = `Feelslike temperature : ${data.feelslike}`;
                time.innerHTML = `Time : ${data.time}`;
                humidity.innerHTML = `Humidity : ${data.humidity}`;
            }
        })
    });
}) 