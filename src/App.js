import './App.css';
import Search from './component/search/search';
import CurrentWeather from './component/current-weather/current-weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
import ForeCast from './component/forecast/forecast';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setForeCast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setcurrentWeather({ city: searchData.label, ...weatherResponse });
        setForeCast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <header className="header">
            <div className="header-content">
                <h1 className="logo">AeroSense</h1>
            </div>
        </header>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <ForeCast data={forecast} />}
      </div>
      <footer className="footer">
            <a 
                href="https://portfolio-main-sigma-two.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
            >
                Designed by Datta Srivathsava Gollapinni
            </a>
        </footer>
    </>
  );
}

export default App;