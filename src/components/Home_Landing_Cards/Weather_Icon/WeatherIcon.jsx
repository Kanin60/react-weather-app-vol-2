import { currentWeather } from "../../../Helpers"


export function WeatherIcon(props) {

    let currentTime = new Date().getHours()
    

    

    // console.log(currentTime);

    return (
        <section>
            <p>{currentWeather(props.weathercode[currentTime])}</p>
        </section>
    )
}
