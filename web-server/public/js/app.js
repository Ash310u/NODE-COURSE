console.log('client side js file is loaded');

fetch('http://localhost:3000/weather?address=kolkata').then((response) => {
    response.json().then((data) => {
        console.log(data);
    })
})