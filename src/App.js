import React from 'react';
import './App.css';
import Weather from './Weather';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Harare"/>
      <footer> 
        <p>
      This project is created by {""}<a href="https://www.shecodes.io/graduates/21150-varsharanee-roopun" target="_blank" className='link-light' rel="noopener noreferrer"> VarsharaneeAR </a> and {""}
      <a href="https://github.com/VarsharaneeAR/weather-app-project-react" target="_blank" className="link-light" rel="noopener noreferrer">{""} is open sourced on Github</a></p></footer>
     
    </div>
  ); 

  
}
