import minMaxTemp from '../Prognose/PrognoseTemperatur.module.scss'

export const PrognoseTemperatur = (props) => {


    return (
        <section className={minMaxTemp.minMaxTempSection} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {
                props.temperaturMin &&
                props.temperaturMin.map((item, index) => {
                    return (
                        <p className={minMaxTemp.minMaxTemp} key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2" /><path d="M13.778 14.364a3 3 0 1 0-4.243-4.243c-.445.446-.756 1.371-.971 2.346c-.32 1.459-.481 2.188.1 2.77c.58.58 1.31.42 2.768.098c.975-.214 1.9-.525 2.346-.971Z" /><path stroke-linecap="round" d="M9 21.542C4.943 20.268 2 16.478 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542" /></g></svg>{item}°</p>
                    )
                }
                )}
            {
                props.temperaturMax &&
                props.temperaturMax.map((item, index) => {
                    return (
                        <p className={minMaxTemp.minMaxTemp} key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="m19 19l-1.5-1.5M19 5l-1.5 1.5M5 19l1.5-1.5M5 5l1.5 1.5M2 12h2m16 0h2M12 4V2" /><path d="M10.121 14.364a3 3 0 1 1 4.243-4.243c.446.446.757 1.371.971 2.346c.321 1.459.482 2.188-.099 2.77c-.58.58-1.31.42-2.769.098c-.975-.214-1.9-.525-2.346-.971Z" /><path stroke-linecap="round" d="M9 21.542C4.943 20.268 2 16.478 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.478-2.943 8.268-7 9.542" /></g></svg>
                            {item}° </p>

                    )
                }
                )}
        </section>
    )
}