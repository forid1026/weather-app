
const apiKey = '8e9b2f45032975fb6b7ceee4d90c36ef';

document.getElementById('submit').addEventListener('click', function(){
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
})


function getInput(id, value){
    document.getElementById(id).innerHTML = value;
}


const  displayTemperature = data =>{
    const { description } = data.weather[0];
        const { speed } = data.wind;
        const { name } = data;
        const { temp, humidity } = data.main;
        const icon = data.weather[0].icon;
        iconURl =  "https://openweathermap.org/img/wn/" + icon + ".png";
        document.getElementById('weather-icon').src = iconURl;
        getInput('city', name);
        getInput('temperature', temp);
        getInput('condition', description);
        getInput('humidity', humidity);
        document.getElementById('city-name').value = "";
}

















// const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
// const searchTemperature = () => {
//     const city = document.getElementById('city-name').value;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayTemperature(data));
// }

// const setInnerText = (id, text) => {
//     document.getElementById(id).innerText = text;
// }

// const displayTemperature = temperature => {
//     setInnerText('city', temperature.name);
//     setInnerText('temperature', temperature.main.temp);
//     setInnerText('condition', temperature.weather[0].main);
//     // set weather icon
//     const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
//     const imgIcon = document.getElementById('weather-icon');
//     imgIcon.setAttribute('src', url);
// }