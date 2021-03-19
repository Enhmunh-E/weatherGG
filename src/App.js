import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import icon_search from './search.png'

const App = () => {
  const [weather, setWeather] = useState(null); 
  useEffect(async () => {
    await axios.get(`https://weather-api.endigo.now.sh/api/v1/weather`)
      .then(res => {
          setWeather(res.data.Cities[26]);
      })
  }, [])
  return (
    <>
      {
        weather !== null && (
          <div className="App">
            <div className="left">
              <div className='wther'>
                <p className='gradus'>
                  {weather.Weathers[0].TemperatureDay}℃
                </p>
              </div>
            </div>
            <div className="right">
              <div className="search">
                <img src={icon_search} width="50px"/>
              </div>
              <input type="text" placeholder="Another location"/>
              <p>City 1</p>
              <p>City 2</p>
              <p>City 3</p>
              <hr/>
              <p className='h'>Weather Details</p>
                <div className='tday'>
                  <p>PhenoDay</p>
                  <p>{weather.Weathers[0].PhenoDay}</p>
                </div>
                <div className='tday'>
                  <p>PhenoNight</p>
                  <p>{weather.Weathers[0].PhenoNight}</p>
                </div>
                <div className='tday'>
                  <p>WindDay</p>
                  <p>{weather.Weathers[0].WindDay}</p>
                </div>
                <div className='tday'>
                  <p>WindNight</p>
                  <p>{weather.Weathers[0].WindNight}</p>
                </div>
            </div>
        </div>    
        )
      }
    </>
  );
}

export default App;
