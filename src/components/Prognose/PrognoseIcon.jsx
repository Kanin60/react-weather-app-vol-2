import SunUpDownStyle from '../Home_Landing_Cards/SunUp_SunDown/SunUp_SunDown.module.scss'
import { currentWeather } from "../../Helpers"

export function PrognoseIcon(props) {



    // console.log(props.weathercode);

    return (
        <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {
                props.weathercode &&
                props.weathercode.map((item, index) => {
                    return (
                        <p className={SunUpDownStyle.prognoseIcon} key={index}>{currentWeather(item)}</p>
                    )
                })
            }
        </section>
    )
}
