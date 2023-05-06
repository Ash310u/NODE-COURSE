setTimeout(() => {
    console.log('Two sceonds are up!');
}, 2000);

const names = ['Ash', 'rick', 'mortry'];

const shortNames = names.filter((name) => {
    return name.length <= 4
});
// console.log(shortNames);

const geocode = (address,callback) => {
    setTimeout(() => {
        const data = {
            lat : 0,
            lon : 0
        };
        callback(data);
    }, 2000);
};
// calling a callback function
geocode('New York', (dataFromCallBack) =>{
    console.log(dataFromCallBack);
});


// Challenge
const add = (a,b,callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 2000);
}


add(1,4,(sum) =>{
    console.log(sum);
});
