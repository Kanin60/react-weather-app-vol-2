/* Denne funktion henter den nuværende location.
Vi bruger den når siden loads og når vi trykker på knappen. 
Navigator er en variable, hvor en af property'erne er geolocation.
Vi sætter getCurrentPosition() på navigator, som en metode. 
Jeg ved ikke om det er kode fra react eller axios

Grunden til at denne function er i Helpers.js er fordi vi bruger den til 
at hente nuværende location både i FetchLocation og LocationButton */


import {TiWeatherCloudy, TiWeatherDownpour, TiWeatherNight, TiWeatherPartlySunny, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny, TiWeatherWindyCloudy, TiWeatherWindy} from 'react-icons/ti';


export function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        // console.log("getCurrent Position functionen kører")
        navigator.geolocation.getCurrentPosition(resolve, reject);
    }
    );
}






export function currentWeather(weathercode) {
    switch (weathercode) {
        case 0:
            //Clear sky
            return  <TiWeatherSunny/>
        case 1:
            //Mainly clear
            return <TiWeatherPartlySunny/>
        case 2:
            // partly cloudy
            return <TiWeatherPartlySunny/>
        case 3:
            //overcast
            return <TiWeatherPartlySunny/>
        case 45:
            //Fog
            return <TiWeatherWindyCloudy/>
        case 48:
            //depositing rime fog
            return <TiWeatherWindyCloudy/>
        case 51:
            //Drizzle: Light
            return <TiWeatherShower/>
        case 53:
            //Drizzle: moderate
            return<TiWeatherShower/>
        case 55:
            //Drizzle: dense intensity
            return<TiWeatherShower/>
        case 56:
            //Freezing Drizzle: Light and dense intensity
            return <TiWeatherShower/>
        case 57:
            //Freezing Drizzle: dense intensity
            return <TiWeatherShower/>
        case 61:
            //Rain: Slight
            return<TiWeatherDownpour/>
        case 63:
             //Rain: moderate
            return <TiWeatherDownpour/>
        case 65:
             //Rain: heavy intensity
            return <TiWeatherDownpour/>
        case 66:
            //Freezing Rain: Light
            return <TiWeatherDownpour/>
        case 67:
            //Freezing Rain: heavy intensity
            return <TiWeatherDownpour/>
        case 71:
            //Snow fall: Slight
            return <TiWeatherSnow/>
        case 73:
            //Snow fall: moderate
            return <TiWeatherSnow/>
        case 75:
            //Snow fall: heavy intensity
            return <TiWeatherSnow/>
        case 77:
            //Snow grains
            return <TiWeatherSnow/>
        case 80:
            //Rain showers: Slight
            return <TiWeatherDownpour/>
        case 81:
            //Rain showers: moderate
            return <TiWeatherDownpour/>
        case 82:
            //Rain showers: violent
            return <TiWeatherDownpour/>
        case 85:
            //Snow showers slight
            return <TiWeatherSnow/>
        case 86:
            //Snow showers heavy
            return <TiWeatherSnow/>
        case 95:
            //Thunderstorm: Slight or moderate
            return <TiWeatherStormy/>
        case 96:
            //Thunderstorm with slight hail
            return <TiWeatherStormy/>
        case 99:
            //Thunderstorm with heavy hail
            return <TiWeatherStormy/>
        default:
            break;
    }
}