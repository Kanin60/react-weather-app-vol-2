export function WeatherIcon(props) {

    console.log("hvad er det?", props.weathercode);
    return (
        <section>
            <p>{props.weathercode && props.weathercode}</p>
            <img src="" alt="VejrIkon"/>
        </section>
    )
}
