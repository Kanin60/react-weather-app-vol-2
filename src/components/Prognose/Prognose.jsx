import { useEffect, useState } from "react";
import { PrognoseIcon } from "./PrognoseIcon"
import { PrognoseTemperatur } from "./PrognoseTemperatur";
// import { PrognoseRain } from "./PrognoseRain";


export function Pronose() {

    const [pronoseData, setPronoseData] = useState([])

    useEffect(() => {
        const FetchPrognose = () => {
            const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe%2FBerlin&forecast_days=3"
            fetch(url).then(res => res.json()).then(data => setPronoseData(data))
        }
        FetchPrognose()
    }, [])
    console.log("Her er dataen fra prognosen: ", pronoseData);

    return (
        <>
            {pronoseData && pronoseData.daily &&
                <>
                    <PrognoseIcon weathercode={pronoseData.daily.weathercode} />
                    <PrognoseTemperatur temperaturMin={pronoseData.daily.temperature_2m_min} temperaturMax={pronoseData.daily.temperature_2m_max} />
                </>
            }
        </>
    )
}