import React, { useState } from 'react';
import './App.css';

const APIKEY = "458011ff5fd32cdaa2db24a8c2914b47";

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchApi = async () => {
    try {
      let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${APIKEY}&units=metric`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      let data = await res.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  const handleInputChange = (e) => {
    setCity(e.target.value);
  }

  const handleSearch = () => {
    fetchApi();
  }

  return (
    <div className="app-container">
      <nav className="nav">
        <input 
          className='city' 
          id='city' 
          placeholder='Enter a city...' 
          name='city'
          value={city}
          onChange={handleInputChange}
        />
        <button onClick={handleSearch}>Search</button>
      </nav>
      {weatherData && (
        <div className="weather-info">
          <h2>Weather in {weatherData.name} 🌤️</h2>
          <p>Temperature: {weatherData.main.temp}°C (That's hot, right?)</p>
          <p>Weather: {weatherData.weather[0].description} (Don't forget your umbrella! ☔)</p>
          <p>Humidity: {weatherData.main.humidity}% (You might need to sweat it out!)</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s (Hold onto your hats! 🥳)</p>
        </div>
      )}
    </div>
  );
}

export default App;
