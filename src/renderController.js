import { getWeatherDataByLocation, setTemperatures } from "./dataController.js";
import { iconEnum } from "./iconsEnum.js";
import { getDayString, getMonthString } from "./calendarFormatting.js";

const mainContainer = document.querySelector('.main-container');

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
    temperatureUnitButton.innerHTML = isFahrenheit === 0 ? 'C°' : 'F°';
    isFahrenheit = isFahrenheit === 0 ? 1 : 0;
    drawAll(json, temperatures);    
});

const searchBar = document.querySelector('.search');
const submitButton = document.querySelector('.hidden-submit');

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  initializeDOM(searchBar.value);
});



function drawTodayCell(json, temps) {
    const todayElement = document.createElement('div');
    todayElement.classList.add('today');
    
    let todaysDate = new Date(json['days'][0]['datetimeEpoch'] * 1000);
    let todaysTime = todaysDate.toLocaleString([], { hour: '2-digit', minute: '2-digit' });   

    todayElement.innerHTML = `<div class="today-left">
                    <div class="today-left-left">
                        <img class="today-icon" src="${iconEnum[json['days'][0]['icon']]}">
                        <div class="today-date">${getDayString(todaysDate.getDay())}<p></p>${getMonthString(todaysDate.getMonth())} ${todaysDate.getDay()}</div>
                    </div>
                    <div class="today-left-right">
                        <div class="today-temp">${temps['todaysTemp'][isFahrenheit]}</div>
                        <div class="today-lo-hi">${temps['todaysTempMin'][isFahrenheit]}/${temps['todaysTempMax'][isFahrenheit]}</div>
                        <div class="today-time">${todaysTime}</div>
                    </div>
                </div>
                <div class="today-right"></div>`;
    mainContainer.appendChild(todayElement);
}

function clearAll() {
  while(mainContainer.lastChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
}

function drawAll(json, temps) {
    clearAll();
    drawTodayCell(json, temps);
}
  

export { initializeDOM };