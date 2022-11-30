import React from "react";
import "./styles.css";
import weatherData from './weatherData';
import WeatherForecast from './components/WeatherForecast'

const weather = weatherData.map((weather, index) => {
  return (
    <WeatherForecast {...weather} key={index}/>
  )
})
//I would recommend copying the original hard coded HTML structure from the public folder, there is a section tag that has a bunch of styling already added to it that you did not use
export default function App() {
  return (
    <div className="App">
      <h1>Ellie's Weather Icons App</h1>
      <div className='weather'> 
      {weather}
    </div>
    </div>
  );
}
