import "./styles.css";
import { getWeatherDataByLocation } from "./dataController.js";
import { drawAll, isFahrenheit } from "./renderController.js";


getWeatherDataByLocation('dallas').then(json => {
  console.log(json);

  let temps = calculateTemperature(isFahrenheit, json);
  
  drawAll(json);
});


// TODO: refactor this into different module.
function calculateTemperature(isFahrenheit, json) {
    let temperatures = {
        'todaysTemp': json['days'][0]['temp'],
        'todaysTempMin': json['days'][0]['tempmin'],
        'todaysTempMax': json['days'][0]['tempmax']
    };

    console.log(temperatures);
    

    for (let key in temperatures) {
        if (temperatures.hasOwnProperty(key)) {
            temperatures[key] = isFahrenheit ? Math.round(temperatures[key]) : Math.round((temperatures[key] - 32) / 1.8);
        }
    }


    return temperatures;
}