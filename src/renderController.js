
// Refactor all necessary doc grabs to initialize function?
const todayContainer = document.querySelector('.today');

function drawAll(json) {
  drawTodayCell(json);
}



const mainContainer = document.querySelector('.main-container');

function drawTodayCell(json) {
    const todayElement = document.createElement('div');
    todayElement.classList.add('today');

    todayElement.innerHTML = `<div class="today-left">
                    <div class="today-left-left">
                        <div class="today-icon">${json['days'][0]['icon']}</div>
                        <div class="today-date">${json['days'][0]['datetimeEpoch']}</div>
                    </div>
                    <div class="today-left-right">
                        <div class="today-temp">${json['days'][0]['temp']}</div>
                        <div class="today-lo-hi">${json['days'][0]['tempmin']}/${json['days'][0]['tempmax']}</div>
                        <div class="today-time">${json['days'][0]['datetimeEpoch']}</div>
                    </div>
                </div>
                <div class="today-right"></div>`;

    mainContainer.appendChild(todayElement);
}



export { drawAll };