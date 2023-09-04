import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherNight, TiWeatherPartlySunny, TiWeatherShower, TiWeatherSnow, TiWeatherStormy, TiWeatherSunny, TiWeatherWindyCloudy, TiWeatherWindy } from 'react-icons/ti';
import style from '../Weather_Icon/WeatherIcon.module.scss'
import { currentWeather } from "../../../Helpers"


export function WeatherIcon(props) {

    let currentTime = new Date().getHours()




    // console.log(currentTime);

    return (
        <section>
            <p className={style.BigIcon}>{currentWeather(props.weathercode[currentTime])}</p>
        </section>
    )
}
