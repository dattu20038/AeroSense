// current-weather.js
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog } from 'lucide-react';
import './current-weather.css';

const iconMapping = {
    "01d": <Sun className="w-12 h-12" />,
    "01n": <Sun className="w-12 h-12" />,
    "02d": <Cloud className="w-12 h-12" />,
    "02n": <Cloud className="w-12 h-12" />,
    "03d": <Cloud className="w-12 h-12" />,
    "03n": <Cloud className="w-12 h-12" />,
    "04d": <Cloud className="w-12 h-12" />,
    "04n": <Cloud className="w-12 h-12" />,
    "09d": <CloudRain className="w-12 h-12" />,
    "09n": <CloudRain className="w-12 h-12" />,
    "10d": <CloudRain className="w-12 h-12" />,
    "10n": <CloudRain className="w-12 h-12" />,
    "11d": <CloudLightning className="w-12 h-12" />,
    "11n": <CloudLightning className="w-12 h-12" />,
    "13d": <CloudSnow className="w-12 h-12" />,
    "13n": <CloudSnow className="w-12 h-12" />,
    "50d": <CloudFog className="w-12 h-12" />,
    "50n": <CloudFog className="w-12 h-12" />
};

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="city">{data.city}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>
                <div className="icon">
                    {iconMapping[data.weather[0].icon] || <Cloud className="w-12 h-12" />}
                </div>
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">Feels Like</span>
                        <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">Wind Speed</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;