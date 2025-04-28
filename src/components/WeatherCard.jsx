import { useState, useEffect} from "react";
import Card from "./Card";
import LoadingTextBlock from "./LoadingTextBlock";

const weatherApi ={
    key: '28925f5fd79e9d6865acbc4049492fe6' ,
    base: 'https://api.openweathermap.org/data/2.5/'
}
function WeatherCard ({location}) {
    const [search, setSearch] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (location) {
            setSearch(location); 
        }
    }, [location]);

    useEffect(() => {
        if (search) {
            setLoading(true);
            fetch(`${weatherApi.base}weather?q=${search}&units=imperial&APPID=${weatherApi.key}`)
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setWeatherData(result);
              setLoading(false);
            })
        }
      }, [search]);

    return (
    <>
        {weatherData && (
            <>
        <LoadingTextBlock loading={loading} title="Temperature" text={`Low: ${weatherData.main.temp_min}°F - High: ${weatherData.main.temp_max}°F`} />
        <LoadingTextBlock loading={loading} title="Conditions" text={weatherData.weather[0].description} />
        <LoadingTextBlock loading={loading} title="Wind Speed" text={weatherData.wind.speed} />
            </>
        )}
    </>
    )
}export default WeatherCard;
