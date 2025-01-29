import "./styles.css";
import { getWeatherDataByLocation, setTemperatures } from "./dataController.js";
import { initializeDOM } from "./renderController.js";

let temperatures = {};

// getWeatherDataByLocation('dallas').then(json => {
// //   console.log(json);

//   temperatures = setTemperatures(json);
  
// //   console.log(temperatures);
  
  
//   drawAll(json, temperatures);
// });



initializeDOM();