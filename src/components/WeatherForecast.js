import React from 'react'
//i would also recommend working the bonus on this HW to practice breaking up compoenents into even smaller piece with WeatherData and WeatherIcon

const WeatherForecast = ({img, conditions, time}) => {
  return (
    <div className="icons">
    <img src={img} alt="" />
    <p><span>conditions:</span> {conditions}</p>
    <p><span>time:</span> {time}</p>
    </div>
  )}


  
export default WeatherForecast 