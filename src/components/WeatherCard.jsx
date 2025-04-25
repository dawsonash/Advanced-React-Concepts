import { useState, useEffect} from "react";
import Card from "./Card";


const weatherApi ={
    key: '28925f5fd79e9d6865acbc4049492fe6' ,
    base: 'https://api.openweathermap.org/data/2.5/'
}
function WeatherCard ({location}) {
    const [search, setSearch] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (location) {
            setSearch(location); 
        }
    }, [location]);

    useEffect(() => {
        if (search) {
            fetch(`${weatherApi.base}weather?q=${search}&units=imperial&APPID=${weatherApi.key}`)
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              setWeatherData(result);
            });
        }
      }, [search]);

    return (
        <div className="flex flex-col h-full justify-between items-start self-stretch">
        {weatherData && weatherData.main && (
        <div className="flex flex-col flex-1 justify-between py-1 ">
            <div className='flex h-16 p-4 flex-col justify-left items-start'>
                <h3 className='font-heading text-lg'>Temperature</h3>
                <p className="font-body ">
                    Low: {weatherData.main.temp_min}°F - High: {weatherData.main.temp_max}°F</p>
            </div>
            <div className='flex h-16 p-4 flex-col justify-left items-start'>
                <h3 className="font-heading text-lg">Conditions</h3>
                <p className="font-body">{weatherData.weather[0].description}</p>
            </div>
            <div className="flex h-16 p-4 flex-col justify-left items-start">
                <h3 className="font-heading text-lg">Wind Speed</h3>
                <p>{weatherData.wind.speed} mph</p>
            </div>
        </div>
      )}
     
        </div>
    )
} export default WeatherCard