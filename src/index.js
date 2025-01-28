import "./styles.css";
import { getWeatherDataByLocation } from "./dataController.js";
import { drawAll } from "./renderController.js";


getWeatherDataByLocation('dallas').then(json => {
  console.log(json);
  drawAll(json);
});

