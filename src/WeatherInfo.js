import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";




export default function WeatherInfo(props){
return(
    <div className="WeatherInfo">
    <span className="location">{props.data.city}, {""}{props.data.country}</span>
           <ul className="current-day">
            <li className="date">
               <FormattedDate date={props.data.date}/>
            </li>
            <li className="text-capitalize">
            {props.data.description}
            </li>
           </ul>
           <div className="row">
                <div className="col-7">
                  <div className="weatherIcon">
                    < WeatherIcon code={props.data.icon} /></div>
                    <WeatherTemperature celsius={props.data.temperature}/>
                </div>
                <div className="col-5">
                    <ul className="todays-forecast">
                        <li>
                            Precipitation: {""}{Math.round(props.data.precipitation)}%
                        </li>
                        <li>
                           Humidity: {""}{Math.round(props.data.humidity)}%
                        </li>
                        <li>
                            Wind: {""}{Math.round(props.data.wind)} km/hr
                        </li>
                    </ul>
            </div>
          </div>
          </div>
)
};