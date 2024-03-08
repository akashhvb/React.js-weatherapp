import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../Assets/research.png";
import sun_icon from "../Assets/sun.png";
import cloud_icon from "../Assets/cloudy.png"
import snowflake_icon from "../Assets/snowflake.png";
import rain_icon from "../Assets/rain.png";
import weather_icon from "../Assets/weather-app.png";
import wind_icon from "../Assets/wind.png";
const WeatherApp = () => {
    
    let api_key="89289f9172a80edd1afe33d51694942c";

     const [wicon,setwicon]= useState(cloud_icon);
     const search=async()=>{
        const element=document.getElementsByClassName("cityInput")
        if (element[0].value==="")
        {
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
          
         let response= await fetch(url);
         let data = await response.json();
         const humidity=document.getElementsByClassName("humidity-percent");
         const wind=document.getElementsByClassName("wind-rate");
         const temperature=document.getElementsByClassName("weather-temp");
         const location=document.getElementsByClassName("weather-location")
          

         humidity[0].innerHTML = data.main.humidity+"%";
         wind[0].innerHTML=Math.floor(data.wind.speed)+"km/h";
         temperature[0].innerHTML =Math.floor(data.main.temp)+"°c";
         location[0].innerHTML=data.name;
         
         if(data.weather[0].icon==="01d"|| data.weather[0].icon==="01n")
         {
            setwicon(sun_icon);
         }
         else if(data.weather[0].icon==="02d"|| data.weather[0].icon==="02n")
         {
              setwicon(rain_icon);  
         }
         else if(data.weather[0].icon==="04d"|| data.weather[0].icon==="04n")
         {
            setwicon(wind_icon);
         }
         else if(data.weather[0].icon==="09d"|| data.weather[0].icon==="09n")
         {
            setwicon(weather_icon);
         }
         else if(data.weather[0].icon==="10d"|| data.weather[0].icon==="010n")
         {
            setwicon(rain_icon);
         }
         else if(data.weather[0].icon==="13d"|| data.weather[0].icon==="13n")
         {
            setwicon(snowflake_icon);
         }
         else
         {
            setwicon(sun_icon);
         }
        } 
    return (
    <div className='container'>
        <div className="top-bar">
         <input type="text" className="cityInput" placeholder='Search'/>
         <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt=''/>
         </div>
        </div>

        <div className="weather-image">
            <img src={cloud_icon} alt=''/>
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={weather_icon} alt="" className="icon"/>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className="icon"/>
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default WeatherApp
