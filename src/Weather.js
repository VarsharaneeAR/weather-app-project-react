import React, {useState} from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";



export default function Weather(){
    const [ weatherData, setWeatherData]= useState({ready:false});
    function displayTemperature(response){
        console.log(response.data);
        setWeatherData(
            {
            ready:true,
            temperature:response.data.main.temp,
            wind:response.data.wind.speed,
            humidity:12,
            date: new Date(response.data.dt*1000),
            precipitation:response.data.main.humidity,
            city: response.data.name,
            country:response.data.sys.country,
            description:response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,}
            )
    
    }
             if(weatherData.ready){
            return(
        <div className="Weather">
            <form className="search">
               <input type="text" placeholder="ENTER CITY HERE"/>
               {""}< button type="submit" value="search" className="btn  btn-outline-light btn-sm">SEARCH</button>
            </form>
    

    <span className="location">{weatherData.city}, {""}{weatherData.country}</span>


           
           <ul className="current-day">
            <li className="date">
               <FormattedDate date={weatherData.date}/>
            </li>
            <li className="text-capitalize">
            {weatherData.description}
            </li>
           </ul>
           <div className="row">
                <div className="col-8">
                    <img src={weatherData.icon} alt=""/> 
                    <span className="temperature"> {Math.round(weatherData.temperature)}°C</span>
                </div>
                <div className="col-4">
                    <ul className="todays-forecast">
                        <li>
                            Precipitation: {""}{Math.round(weatherData.precipitation)}%
                        </li>
                        <li>
                           Humidity: {""}{Math.round(weatherData.humidity)}%
                        </li>
                        <li>
                            Wind: {""}{Math.round(weatherData.wind)} km/hr
                        </li>
                    </ul>
            </div>
          </div>
          </div>
    )
}
else{
    const apiKey ="c95d60a1e3adbeb286133f1ebebc2579";
    let city = "Harare";
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);

    return ("Loading Weather...");

}
}