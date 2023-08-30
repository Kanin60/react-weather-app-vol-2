import { useEffect, useState } from "react";


export function FetchWeater() {
    
    const [weatherData, setWeatherDate] = useState()

    useEffect(() => {
        const FetchWeater = () => {
            const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation,windspeed_10m,winddirection_10m&daily=sunrise,sunset&timezone=Europe%2FBerlin&forecast_days=1"
            fetch(url).then(res => res.json()).then(data => setWeatherDate(data))
        }
        FetchWeater()
    },[])
    console.log("Her er vejr-dataen",weatherData);

    //Dataen ligger i variablen weatherData:
        //solopgang = weatherData.daily.sunrise
        //solnedgang = weatherData.daily.sunset
        //temperatur = weatherData.hourly.temperature_2m
        //regn = weatherData.hourly.precipitation
        //vindhastighed = weatherData.hourly.windspeed_10m
        //vindretning = weatherData.hourly.winddirection_10m


    return(
        <>

        </>
    )
}