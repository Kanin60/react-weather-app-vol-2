export function Temperature(props) {

    return (
        <section>
            <h3 style={{ Textalign: 'center' }}> Temperatur { props.temperatur && props.temperatur[0] }{props.grader && props.grader} </h3>
        </section>
    )
}
