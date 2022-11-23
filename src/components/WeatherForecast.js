import React from 'react'


const WeatherForecast = ({img, conditions, time}) => {
  return (
    <div className="icons">
    <img src={img} alt="" />
    <p><span>conditions:</span> {conditions}</p>
    <p><span>time:</span> {time}</p>
    </div>
  )}


  
export default WeatherForecast 