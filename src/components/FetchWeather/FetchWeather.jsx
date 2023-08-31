//Her importere vi alle de componenter som bruger vejr-data - samt useEffect og useState
import { useEffect, useState } from "react";
import { Rain } from "../Home_Landing_Cards/Rain/Rain";
import { Temperature } from "../Home_Landing_Cards/Temperature/Temperature";
import { SunUp_SunDown } from "../Home_Landing_Cards/SunUp_SunDown/SunUp_SunDown";
import { WindSpeed } from "../Home_Landing_Cards/Wind_Speed/WindSpeed";
import { WeatherIcon } from "../Home_Landing_Cards/Weather_Icon/WeatherIcon";//Jeg ved ikke hvordan vi skal denne endnu

//Her starter funktionen FetchWeater, som vi exportere til App.jsx
export function FetchWeater() {
    
    //Her bruger vi useState til at gemme data i variablen weatherData
    const [weatherData, setWeatherDate] = useState()

    // Vi bruger useEffect så dataen kun bliver fetchet en gang
    useEffect(() => {
        const FetchWeater = () => {
            const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,weathercode,windspeed_10m,winddirection_10m&daily=sunrise,sunset&timezone=Europe%2FBerlin&forecast_days=1"
            fetch(url).then(res => res.json()).then(data => setWeatherDate(data))
        }
        FetchWeater()
    },[])

    // console.log("Her er alt data fra url'en", weatherData);
    // console.log("Er der et nummer?", weatherData.hourly.weathercode[1])

    return(
        <>
            {weatherData && 
            <>
                <Temperature temperatur={weatherData.hourly.temperature_2m} grader={weatherData.hourly_units.temperature_2m}/>
                <WindSpeed vindhastighed={weatherData.hourly.windspeed_10m} km={weatherData.hourly_units.windspeed_10m} vindretning={weatherData.hourly.winddirection_10m} graderRetning={weatherData.hourly_units.winddirection_10m}/>
                <Rain regn={weatherData.hourly.precipitation} mm={weatherData.hourly_units.precipitation}/>
                <WeatherIcon weathercode={weatherData.hourly.weathercode}/>
                <SunUp_SunDown solopgang={weatherData.daily.sunrise} solnedgang={weatherData.daily.sunset}/>
            </> }
        </>
    )
}