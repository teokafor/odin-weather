import { drawAll } from './renderController.js';

async function getWeatherDataByLocation(query) {
  try {  
    const data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}/next7days?unitGroup=us&elements=datetime%2CdatetimeEpoch%2Cname%2CresolvedAddress%2Ctempmax%2Ctempmin%2Ctemp%2Csunrise%2Csunset%2Cicon&include=days%2Chours%2Ccurrent&key=DFRPJU88SJQXMK4H83UGTXR2S&contentType=json`, {mode: 'cors'});
    const json = await data.json();  

    return json;
  } catch (err) {
    console.log(err);
  }
}

function setTemperatures(json) {
    let temperatures = {
        'todaysTemp': json['days'][0]['temp'],
        'todaysTempMin': json['days'][0]['tempmin'],
        'todaysTempMax': json['days'][0]['tempmax']
    };

    /*
     We don't necessarily need to re-calculate the f/c value every time
     we want to display it, since the value will not change until the user
     selects a new location. As such, we can reduce headache by building
     a static object with variable names, and their respective f/c temps.

     build base object (done! great work!)
     map values of object into array of f/c
     
    */

    for (let key in temperatures) {
        if (temperatures.hasOwnProperty(key)) {
            temperatures[key] = [Math.round(temperatures[key]), Math.round((temperatures[key] - 32) / 1.8)];
        }
    }
    return temperatures;
}

export { getWeatherDataByLocation, setTemperatures };



// TODO: Handle c to f