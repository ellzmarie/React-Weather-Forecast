import React from "react";
import "./styles.css";
import weatherData from './weatherData';
import WeatherForecast from './components/WeatherForecast'

const weather = weatherData.map((weather, index) => {
  return (
    <WeatherForecast {...weather} key={index}/>
  )
})

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
