import { getWeatherDataByLocation, setTemperatures } from "./dataController.js";

let temperatures = {};
let json = {};

async function initializeDOM(query = 'Dallas, TX') {
  getWeatherDataByLocation(query).then(data => {
    console.log('api return');
    
    json = data;

    temperatures = setTemperatures(json);
    drawAll(json, temperatures)
  });
}


let isFahrenheit = 0; // 0 = yes, 1 = no
const temperatureUnitButton = document.querySelector('.temperature-unit-button');
temperatureUnitButton.addEventListener('click', () => {
    isFahrenheit = isFahrenheit === 0 ? 1 : 0;
    drawAll(json, temperatures);    
});

const searchBar = document.querySelector('.search');
const submitButton = document.querySelector('.hidden-submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  initializeDOM(searchBar.value);
});


const mainContainer = document.querySelector('.main-container');

function drawTodayCell(json, temps) {
    const todayElement = document.createElement('div');
    todayElement.classList.add('today');

    todayElement.innerHTML = `<div class="today-left">
                    <div class="today-left-left">
                        <div class="today-icon">${json['days'][0]['icon']}</div>
                        <div class="today-date">${json['days'][0]['datetimeEpoch']}</div>
                    </div>
                    <div class="today-left-right">
                        <div class="today-temp">${temps['todaysTemp'][isFahrenheit]}</div>
                        <div class="today-lo-hi">${temps['todaysTempMin'][isFahrenheit]}/${temps['todaysTempMax'][isFahrenheit]}</div>
                        <div class="today-time">${json['days'][0]['datetimeEpoch']}</div>
                    </div>
                </div>
                <div class="today-right"></div>`;

    mainContainer.appendChild(todayElement);
}

function drawAll(json, temps) {
    drawTodayCell(json, temps);
}
  

export { initializeDOM };