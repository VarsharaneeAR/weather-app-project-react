import React, {useState} from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";



export default function Weather(props){

    const[city,setCity]=useState(props.defaultCity);
    const [ weatherData, setWeatherData]= useState({ready:false});

    function handleResponse(response){
        setWeatherData( {
            ready:true,
            temperature:response.data.main.temp,
            wind:response.data.wind.speed,
            humidity:12,
            date: new Date(response.data.dt*1000),
            precipitation:response.data.main.humidity,
            city: response.data.name,
            country:response.data.sys.country,
            description:response.data.weather[0].description,
            icon: response.data.weather[0].icon,
        });
        }
        

           function handleSubmit(event){
            event.preventDefault();
            search();
    }

          function handleCityChange(event){
          setCity(event.target.value);
        
    
    }

          function search(){
            const apiKey ="c95d60a1e3adbeb286133f1ebebc2579";
            let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);    
    
        }

             if(weatherData.ready){
              return(


        <div className="Weather">
            <form onSubmit ={handleSubmit} className="search">
               <input type="search" placeholder="ENTER CITY" autoFocus="on" onChange={handleCityChange}/>
               {""}< button type="submit" value="search" className="btn btn-light btn-sm">SEARCH</button>
            </form>
    
    <WeatherInfo data={weatherData}/>
          </div>
    );
}
else{
    search();
    return ("Loading Weather...");

}
}