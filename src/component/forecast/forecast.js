import { Accordion, AccordionItemHeading, AccordionItem, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog } from 'lucide-react';
import './forecast.css';

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const iconMapping = {
    "01d": <Sun className="w-8 h-8" />,
    "01n": <Sun className="w-8 h-8" />,
    "02d": <Cloud className="w-8 h-8" />,
    "02n": <Cloud className="w-8 h-8" />,
    "03d": <Cloud className="w-8 h-8" />,
    "03n": <Cloud className="w-8 h-8" />,
    "04d": <Cloud className="w-8 h-8" />,
    "04n": <Cloud className="w-8 h-8" />,
    "09d": <CloudRain className="w-8 h-8" />,
    "09n": <CloudRain className="w-8 h-8" />,
    "10d": <CloudRain className="w-8 h-8" />,
    "10n": <CloudRain className="w-8 h-8" />,
    "11d": <CloudLightning className="w-8 h-8" />,
    "11n": <CloudLightning className="w-8 h-8" />,
    "13d": <CloudSnow className="w-8 h-8" />,
    "13n": <CloudSnow className="w-8 h-8" />,
    "50d": <CloudFog className="w-8 h-8" />,
    "50n": <CloudFog className="w-8 h-8" />
};

const ForeCast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));

    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, indx) => (
                    <AccordionItem key={indx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <div className="icon">
                                        {iconMapping[item.weather[0].icon] || <Cloud className="w-8 h-8" />}
                                    </div>
                                    <label className="days">{forecastDays[indx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">
                                        {Math.round(item.main.temp_max)}°C | {Math.round(item.main.temp_min)}°C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea Level:</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels Like:</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
}

export default ForeCast;